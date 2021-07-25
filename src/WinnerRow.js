import React from "react";

function WinnerRow({ winner }) {
  return (
    winner !== null && (
      <tr className="winner-row">
        <td colSpan={3}>Player {winner} wins</td>
      </tr>
    )
  );
}

export default WinnerRow;
