import React from "react";

function getValue(owner) {
  return owner === 1 ? "x" : owner === 2 ? "o" : null;
}
function getClassnames(owner) {
  const classNames = ["game-cell"];

  if (owner) {
    classNames.push(owner === 1 ? "own-by-first" : "own-by-second");
  }

  return classNames.join(" ");
}

function Cell({ owner, onClick }) {
  const value = getValue(owner);
  const classNames = getClassnames(owner);

  return (
    <td onClick={onClick} className={classNames}>
      {value}
    </td>
  );
}

export default Cell;
