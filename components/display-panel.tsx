import { ICalc } from "@/app/page";
import { formatNumber } from "@/utils/number-format";

interface Props {
  calc: ICalc;
}
export default function DisplayPanel({ calc }: Props) {
  return (
    <div className="flex flex-col items-end">
      <div className="opacity-70 inline-flex space-x-1 align-middle">
        {/* <span>128</span>
        <span className="">x</span> */}
      </div>
      <div className="text-5xl font-bold">
        {calc.operator && !calc.value
          ? formatNumber(calc.operand)
          : formatNumber(calc.value) || "0"}
      </div>
    </div>
  );
}
