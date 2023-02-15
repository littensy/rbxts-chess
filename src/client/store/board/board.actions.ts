export function movePiece(id: string, x: number, y: number) {
	return { type: "MOVE_PIECE", id, x, y } as const;
}

export function resetBoard() {
	return { type: "RESET_BOARD" } as const;
}

export function highlightPiece(id: string) {
	return { type: "HIGHLIGHT_PIECE", id } as const;
}

export type BoardAction = ReturnType<typeof movePiece | typeof resetBoard | typeof highlightPiece>;
