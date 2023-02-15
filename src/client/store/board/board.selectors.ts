import { BoardState } from "./board.reducer";

interface RootState {
	board: BoardState;
}

export const selectBoard = (state: RootState) => state.board;

export const selectTurn = (state: RootState) => state.board.turn;

export const selectPieces = (state: RootState) => state.board.pieces;
