import reducer from "../tictactoe";

describe("tictactoe", () => {
  describe("reducer", () => {
    const play = (x, y) => ({ type: "play", payload: { x, y } });

    describe("on play", () => {
      it("should change the owner of the cell", () => {
        const firstState = reducer(undefined, play(0, 0));
        const secondState = reducer(firstState, play(0, 1));
        const thirdState = reducer(firstState, play(2, 1));

        expect(firstState.board).toEqual([
          [1, null, null],
          [null, null, null],
          [null, null, null]
        ]);
        expect(secondState.board).toEqual([
          [1, null, null],
          [2, null, null],
          [null, null, null]
        ]);
        expect(thirdState.board).toEqual([
          [1, null, null],
          [2, null, 1],
          [null, null, null]
        ]);
      });
      it("should not do anything if the cell is already owned", () => {
        const state = {
          board: [[1, null, 2], [1, null, 2], [null, null, null]],
          isFirstPlayerTurn: true,
          winner: null
        };

        expect(reducer(state, play(0, 0)).board).toEqual(state.board);
      });
      it("should not do anything if there is a winner", () => {
        const state = {
          board: [[1, null, 2], [1, null, 2], [1, null, null]],
          isFirstPlayerTurn: false,
          winner: 1
        };

        expect(reducer(state, play(2, 2)).board).toEqual(state.board);
      });
    });
  });
});
