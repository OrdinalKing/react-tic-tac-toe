const initialState = {
  board: [[null, null, null], [null, null, null], [null, null, null]],
  isFirstPlayerTurn: true,
  winner: null
};

function play({ x, y }, { board, isFirstPlayerTurn, winner }) {
  if (board[y][x] || winner) {
    return board;
  }

  const value = isFirstPlayerTurn ? 1 : 2;

  return [
    ...board.slice(0, y),
    [...board[y].slice(0, x), value, ...board[y].slice(x + 1, board[y].length)],
    ...board.slice(y + 1, board.length)
  ];
}

function getWinner({ board }) {
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

function reducer(state = initialState, action) {
  switch (action.type) {
    case "play":
      return {
        ...state,
        board: play(action.payload, state),
        isFirstPlayerTurn: !state.isFirstPlayerTurn,
        winner: getWinner(state)
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default reducer;
