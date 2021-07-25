import React, { useState } from "react";

import "./styles.css";
import WinnerRow from "./WinnerRow";
import Row from "./Row";
import Cell from "./Cell";
import Board from "./Board";
import DocumentTitle from "./DocumentTitle";

function getWinner(board) {
  const getOwner = (a, b, c) => (a === b && a === c ? a : null);

  return (
    getOwner(...board[0]) ||
    getOwner(...board[1]) ||
    getOwner(...board[2]) ||
    getOwner(board[0][0], board[1][0], board[2][0]) ||
    getOwner(board[0][1], board[1][1], board[2][1]) ||
    getOwner(board[0][2], board[1][2], board[2][2]) ||
    getOwner(board[0][0], board[1][1], board[2][2]) ||
    getOwner(board[0][2], board[1][1], board[2][0])
  );
}

const initialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const initialPlayerTurn = true;

function App() {
  const [board, setBoard] = useState(initialState);
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(initialPlayerTurn);
  const winner = getWinner(board);

  function handleCellClick(x, y) {
    if (board[y][x] === null && winner === null) {
      setBoard(board =>
        board.map((row, cy) =>
          row.map((cell, cx) => {
            if (y === cy && x === cx) {
              return isFirstPlayerTurn ? 1 : 2;
            }
            return cell;
          })
        )
      );
      setIsFirstPlayerTurn(turn => !turn);
    }
  }

  function handleResetClick() {
    setBoard(initialState);
    setIsFirstPlayerTurn(initialPlayerTurn);
  }

  return (
    <>
      <DocumentTitle title={winner ? "Game is over" : "Game in progress"} />
      <Board>
        {board.map((row, y) => (
          <Row key={y}>
            {row.map((cell, x) => (
              <Cell
                key={x}
                owner={cell}
                onClick={() => handleCellClick(x, y)}
              />
            ))}
          </Row>
        ))}
        <WinnerRow winner={winner} />
        <tr>
          <td colSpan="3">
            <button className="game-reset" onClick={handleResetClick}>
              Reset
            </button>
          </td>
        </tr>
      </Board>
    </>
  );
}

export default App;
