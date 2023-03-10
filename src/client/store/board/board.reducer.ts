import { createReducer } from "@rbxts/rodux";
import { BoardAction } from "./board.actions";

export interface BoardState {
	pieces: BoardPiece[];
	piecesCaptured: BoardPiece[];
	turn: BoardColor;
	highlightedPiece: string;
}

export interface BoardPiece {
	id: string;
	type: PieceType;
	x: number;
	y: number;
	color: BoardColor;
}

export type PieceType = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";
export type BoardColor = "white" | "black";

const initialFirstRow: PieceType[] = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
const initialSecondRow: PieceType[] = table.create(8, "pawn");

const initialState: BoardState = {
	pieces: [
		...initialFirstRow.map((t, i): BoardPiece => ({ id: `w${i + 1}`, type: t, x: i, y: 0, color: "white" })),
		...initialSecondRow.map((t, i): BoardPiece => ({ id: `w${i + 9}`, type: t, x: i, y: 1, color: "white" })),
		...initialFirstRow.map((t, i): BoardPiece => ({ id: `b${i + 1}`, type: t, x: i, y: 7, color: "black" })),
		...initialSecondRow.map((t, i): BoardPiece => ({ id: `b${i + 9}`, type: t, x: i, y: 6, color: "black" })),
	],
	piecesCaptured: [],
	turn: "black",
	highlightedPiece: "",
};

export const boardReducer = createReducer<BoardState, BoardAction>(initialState, {
	MOVE_PIECE: (state, action) => {
		const capturedPiece = state.pieces.find((piece) => {
			return piece.x === action.x && piece.y === action.y;
		});

		return {
			...state,

			// move the piece to the new position and capture any piece that exists
			// there by removing it to add it to the captured pieces
			pieces: state.pieces.mapFiltered((piece) => {
				if (piece.id === action.id) {
					return { ...piece, x: action.x, y: action.y };
				}
				return piece.id !== capturedPiece?.id ? piece : undefined;
			}),

			// the captured piece is added to the captured pieces array
			piecesCaptured: capturedPiece ? [...state.piecesCaptured, capturedPiece] : state.piecesCaptured,

			// switch the turn
			turn: state.turn === "white" ? "black" : "white",
		};
	},

	HIGHLIGHT_PIECE: (state, action) => {
		return {
			...state,
			highlightedPiece: action.id,
		};
	},

	RESET_BOARD: () => initialState,
});
