import React from "react";

function Board({ children }) {
  return (
    <table className="game-board">
      <tbody>{children}</tbody>
    </table>
  );
}

export default Board;
