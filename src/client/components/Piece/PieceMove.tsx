import Roact from "@rbxts/roact";
import { useDispatch } from "@rbxts/roact-rodux-hooked";
import { BoardPiece, movePiece } from "client/store/board";
import { PIECE_SIZE } from "./constants";

interface PieceMoveProps {
	piece: BoardPiece;
	offset: [x: number, y: number];
}

export default function PieceMove({ piece, offset }: PieceMoveProps) {
	const dispatch = useDispatch();

	const [x, y] = [piece.x + offset[0], piece.y + offset[1]];

	// don't render if it's not a valid position
	if (x < 0 || y < 0 || x > 7 || y > 7) {
		return <></>;
	}

	const onClick = () => {
		dispatch(movePiece(piece.id, x, y));
	};

	return (
		<textbutton
			Event={{
				Activated: onClick,
			}}
			Text=""
			Size={UDim2.fromOffset(PIECE_SIZE, PIECE_SIZE)}
			Position={UDim2.fromOffset(PIECE_SIZE * x, PIECE_SIZE * y)}
			BackgroundColor3={Color3.fromRGB(30, 120, 70)}
			BackgroundTransparency={0.5}
			BorderSizePixel={0}
		/>
	);
}
