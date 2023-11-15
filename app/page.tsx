"use client";
import SubHeader from "@/components/sub-header";
import DisplayPanel from "@/components/display-panel";
import OptionPanel from "@/components/option-panel";
import CellsPanel from "@/components/cells-panel";
import { useState } from "react";
interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
export interface ICalc {
  value: string;
  operator: string;
  operand: string;
  expression: string[];
  history: {
    expression: string;
    value: string;
  }[];
}
export default function Calculator() {
  // let value = 0;
  const [calc, setCalc] = useState<ICalc>({
    value: "",
    operator: "",
    operand: "",
    expression: [],
    history: [],
  });
  return (
    <div className="grid grid-cols-12 flex-1">
      <div className="col-span-9 flex flex-col">
        <SubHeader />
        <DisplayPanel calc={calc} />
        <OptionPanel />
        <CellsPanel calc={calc} setCalc={setCalc} />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
