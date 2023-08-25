import { colorVariants } from "../common/value";
import type { TCell } from "../types/types";

type CellSetting = {
  type: "Setting";
  color: keyof typeof colorVariants;
  changeColor: (color: keyof typeof colorVariants) => void;
};

type CellGame = {
  type: "Game";
  cellState: TCell;
  x: number;
  y: number;
  color: keyof typeof colorVariants;
  onClick: (a: number, b: number) => void;
};

type CellProps = CellSetting | CellGame;

function Cell(props: CellProps) {
  if (props.type === "Game") {
    const { cellState, x, y, color, onClick } = props;
    return (
      <>
        <div
          onClick={() => onClick(x, y)}
          className={`h-5 w-5 cursor-pointer rounded-sm ${
            cellState === 1 ? `${colorVariants[color]}` : "bg-slate-100"
          }`}
        />
      </>
    );
  } else if (props.type === "Setting") {
    const { color, changeColor } = props;
    return (
      <>
        <div
          className={`color-btn ${colorVariants[color]}`}
          onClick={() => changeColor(color)}
        />
      </>
    );
  }
}

export default Cell;
