import Input from "./input";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type formInput } from "../types/formSchemas";
import { formatValueHandler } from "../lib/formatValue";

const Form = () => {
  const [isUsdToIrr, setIsUsdToIrr] = useState(true);
  const [result, setResult] = useState<number | null>(null);
  const {
    formState: { errors },
    handleSubmit,
    resetField,
    watch,
    control,
  } = useForm<formInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      rate: "",
    },
  });

  const swapHandler = () => {
    setIsUsdToIrr((prev) => !prev);
    setResult(null);
    resetField("amount");
  };

  const resultHandler = (values: formInput) => {
    const amount = Number(values.amount);
    const rate = Number(values.rate);

    setResult(isUsdToIrr ? amount * rate : amount / rate);
  };

  const amount = watch("amount");
  const rate = watch("rate");
  const isFormEmpty = !amount?.trim() || !rate?.trim();

  return (
    <form onSubmit={handleSubmit((values) => resultHandler(values))}>
      <div className="mb-4">
        <label htmlFor="rate" className="block text-[#8b90a0] text-sm mb-2">
          Rate (1 USD = ? IRR)
        </label>
        <Controller
          name="rate"
          control={control}
          render={({ field }) => (
            <Input
              error={errors.rate?.message}
              id="rate"
              {...field}
              value={formatValueHandler(field.value)}
              onChange={(e) =>
                field.onChange(e.target.value.replace(/[^\d.]/g, ""))
              }
            />
          )}
        />
        {errors.rate && (
          <p id="rate-error" className="text-sm text-[#ff6b6b]">
            {errors.rate?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-[#8b90a0] text-sm mb-2">
          {isUsdToIrr ? "Amount in USD" : "Amount in IRR"}
        </label>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <Input
              error={errors.amount?.message}
              id="amount"
              {...field}
              value={formatValueHandler(field.value)}
              onChange={(e) =>
                field.onChange(e.target.value.replace(/[^\d.]/g, ""))
              }
            />
          )}
        />

        {errors.amount && (
          <p id="amount-error" className="text-sm text-[#ff6b6b]">
            {errors.amount?.message}
          </p>
        )}
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-[#8b90a0]">
          {isUsdToIrr ? "USD → IRR" : "IRR → USD"}
        </p>
        <button
          type="button"
          onClick={swapHandler}
          className="cursor-pointer rounded-lg border border-[#2a2e3a] px-4 py-2 text-sm text-[#e8eaf0] transition hover:bg-[#12141a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f8cff]"
        >
          Swap
        </button>
      </div>
      <button
        type="submit"
        disabled={isFormEmpty}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#4f8cff] px-5 py-3 text-base text-white transition hover:bg-[#6a9eff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f8cff] disabled:cursor-not-allowed disabled:bg-[#2a2e3a]"
      >
        Convert
      </button>

      {result !== null && (
        <div className="mt-5 rounded-lg border border-[#2a2e3a] bg-[#12141a] p-4 text-center text-lg text-[#e8eaf0]">
          {`${result.toLocaleString()} `}
          {isUsdToIrr ? "IRR" : "USD"}
        </div>
      )}
    </form>
  );
};

export default Form;
