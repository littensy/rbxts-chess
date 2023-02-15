import Roact from "@rbxts/roact";
import { useMemo } from "@rbxts/roact-hooked";
import { BoardColor, BoardPiece } from "client/store/board";
import { PIECE_SIZE } from "./constants";
import PieceMove from "./PieceMove";

interface PieceProps {
	piece: BoardPiece;
	moves: [x: number, y: number][];
	turn: BoardColor;
	highlightedPieceId: string | undefined;
}

export default function Piece({ piece, moves, turn, highlightedPieceId }: PieceProps) {
	const moveElements = useMemo<Roact.Element[]>(() => {
		if (turn !== piece.color || highlightedPieceId !== piece.id) {
			return [];
		}

		return moves.map((move) => {
			return <PieceMove piece={piece} offset={move} />;
		});
	}, [moves, turn, highlightedPieceId]);

	return (
		<textbutton
			Text={piece.type}
			Size={UDim2.fromOffset(PIECE_SIZE, PIECE_SIZE)}
			Position={UDim2.fromOffset(PIECE_SIZE * piece.x, PIECE_SIZE * piece.y)}
			BackgroundColor3={piece.color === "white" ? Color3.fromRGB(235, 235, 235) : Color3.fromRGB(43, 43, 43)}
			BorderSizePixel={0}
		>
			{moveElements}
		</textbutton>
	);
}
