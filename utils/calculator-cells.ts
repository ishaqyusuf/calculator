import Icons from "@/components/icons";

export default function calculatorCells() {
  // const numberClassName = 'bg-white '
  return {
    cells: [
      { name: "%" },
      { name: "CE" },
      { name: "C" },
      { Icon: Icons.Backspace },
      { name: "1/x" },
      { name: "x²" },
      { Icon: Icons.SquareRoot },
      { name: "/" },
      { name: "7" },
      { name: "8" },
      { name: "9" },
      { name: "x" },
      { name: "4" },
      { name: "5" },
      { name: "6" },
      { name: "-" },
      { name: "1" },
      { name: "2" },
      { name: "3" },
      { name: "+" },
      { Icon: Icons.PlusMinus },
      { name: "0" },
      { name: "." },
      { name: "=" },
    ],
  };
}
