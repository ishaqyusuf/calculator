import { CalcProps } from "@/components/cells-panel";
import Icons from "@/components/icons";

export default function calculatorCells({ calc, setCalc }: CalcProps) {
  // const numberClassName = 'bg-white '
  function numberFn({ name }: { name: string }) {
    // console.log(name);
    if (name == "." && calc.value.indexOf(".") > -1) return;
    setCalc(function(currentState) {
      let currentValue = currentState.value;
      if (!currentValue && name == ".") currentValue = "0";
      return {
        ...currentState,
        value: currentValue + name,
      };
    });
  }
  function evaluate(operator, value1, value2) {
    if (operator == "/") return String(Number(value1) / Number(value2));
  }
  function operatorFn({ name }: { name: string }) {
    setCalc(function(c) {
      //if we have current operator. evaluate values. then set current operator.
      //
      let operator = c.operator;
      let operand = c.operand;
      let value = c.value;
      //if there is no current operator. set as current operator.
      if (!operator) {
        operand = value;
      } else {
        operand = evaluate(name, operand, value);
      }
      operator = name;
      value = "";
      return {
        ...c,
        value,
        operand,
        operator,
      };
    });
  }
  return {
    cells: [
      { name: "%" },
      { name: "CE" },
      { name: "C" },
      { Icon: Icons.Backspace },
      { name: "1/x" },
      { name: "x²" },
      { Icon: Icons.SquareRoot },
      { name: "/", onClick: operatorFn },
      { name: "7", onClick: numberFn },
      { name: "8", onClick: numberFn },
      { name: "9", onClick: numberFn },
      { name: "x" },
      { name: "4", onClick: numberFn },
      { name: "5", onClick: numberFn },
      { name: "6", onClick: numberFn },
      { name: "-" },
      { name: "1", onClick: numberFn },
      { name: "2", onClick: numberFn },
      { name: "3", onClick: numberFn },
      { name: "+" },
      { Icon: Icons.PlusMinus },
      { name: "0", onClick: numberFn },
      { name: ".", onClick: numberFn },
      { name: "=" },
    ],
  };
}
