import calculatorCells from "@/utils/calculator-cells";
import { cn } from "@/utils/cn";

export default function CellsPanel() {
  const cells = calculatorCells();
  return (
    <div className="grid m-1 bg-gray-50 grid-cols-4 flex-1 gap-1">
      {cells.cells.map((cell, i) => (
        <button
          className={cn(
            "inline-flex items-center justify-center rounded-md shadow-sm border bg-white hover:bg-gray-100 hover:bg-opacity-50",
            cell.name == "=" && "bg-blue-700 text-white hover:bg-opacity-75",
            (i < 8 || ["x", "-", "+"].includes(cell.name as any)) &&
              "bg-gray-100  bg-opacity-50 hover:bg-opacity-100"
          )}
          key={i}
        >
          {cell.Icon ? <cell.Icon /> : cell.name}
        </button>
      ))}
    </div>
  );
}
