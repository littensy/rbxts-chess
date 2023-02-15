import { Store, combineReducers } from "@rbxts/rodux";
import { boardReducer } from "./board";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	board: boardReducer,
});

export function configureStore(initialState?: Partial<RootState>) {
	return new Store(rootReducer, initialState);
}
