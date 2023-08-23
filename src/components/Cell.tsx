import type { TCell } from "../types/types";

type CellProps = {
  cellState: TCell;
  x: number;
  y: number;
  color: string;
  onClick: (a: number, b: number) => void;
};

function Cell({ cellState, x, y, color, onClick }: CellProps) {
  return (
    <>
      <div
        onClick={() => onClick(x, y)}
        className={`h-5 w-5 cursor-pointer rounded-sm ${
          cellState === 1 ? `bg-${color}-500` : "bg-slate-100"
        }`}
      />
    </>
  );
}

export default Cell;
