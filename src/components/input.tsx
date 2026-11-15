import type { ComponentProps, FC } from "react";

interface InputPropsTypes extends ComponentProps<"input"> {
  id: string;
  error?: string;
}

const Input: FC<InputPropsTypes> = ({ id, error, ...props }) => {
  return (
    <input
      id={id}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className="w-full mb-2 rounded-lg border border-[#2a2e3a] bg-[#12141a] px-3 py-3 text-base text-[#e8eaf0] outline-none transition placeholder:text-[#8b90a0] focus:border-[#4f8cff] focus:ring-2 focus:ring-[#4f8cff]/20 [color-scheme:dark] [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#12141a_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#e8eaf0] [&:-webkit-autofill]:caret-[#e8eaf0]"
      {...props}
    />
  );
};

export default Input;
