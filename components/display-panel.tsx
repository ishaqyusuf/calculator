import { ICalc } from "@/app/page";

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
      <div className="text-5xl font-bold">{calc.value}</div>
    </div>
  );
}
