import React from "react";
import Cell from "./Cell";


const Board = (props) => {
  //Array(9).fill() -> [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
