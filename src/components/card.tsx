import type { FC, ReactElement } from "react";

interface CardPropsType {
  children: ReactElement;
}

const Card: FC<CardPropsType> = ({ children }) => {
  return (
    <div className="w-full max-w-md space-y-6 rounded-[14px] border border-[#2a2e3a] bg-[#1b1e27] p-6 sm:p-7">
      <h1 className="text-[#e8eaf0] text-xl font-semibold">Convertor</h1>
      {children}
    </div>
  );
};

export default Card;
