import type { ConvertsType } from "../App";

const formatNumber = (value: number) =>
  value.toLocaleString("en-US", { maximumFractionDigits: 2 });

const ConvertHistory = ({ converts }: { converts: ConvertsType[] }) => {
  return (
    <section className="px-6 pb-10">
      <h2 className="mb-4 text-lg font-semibold text-[#e8eaf0]">
        Converts History
      </h2>

      {converts.length === 0 ? (
        <p className="text-sm text-[#8b90a0]">
          Your conversions will show up here.
        </p>
      ) : (
        <ul className="flex flex-wrap gap-3">
          {converts.map((item, index) => {
            const isUsdToIrr = item.type === "USD to IRR";

            return (
              <li
                key={index}
                className="w-full rounded-[14px] border border-[#2a2e3a] bg-[#1b1e27] p-4 sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-md bg-[#12141a] px-2 py-1 text-xs text-[#4f8cff]">
                    {item.type}
                  </span>
                  <span className="text-xs text-[#8b90a0]">
                    Rate: {formatNumber(item.rate)}
                  </span>
                </div>

                <p className="text-sm text-[#8b90a0]">
                  {formatNumber(item.amount)} {isUsdToIrr ? "USD" : "IRR"}
                </p>
                <p className="mt-1 text-base font-semibold text-[#e8eaf0]">
                  = {formatNumber(item.result)} {isUsdToIrr ? "IRR" : "USD"}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ConvertHistory;
