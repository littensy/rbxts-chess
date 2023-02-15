import Roact from "@rbxts/roact";
import { createStory } from "@rbxts/roact-hooked-plus";
import { StoreProvider } from "@rbxts/roact-rodux-hooked";
import { configureStore } from "client/store/store";
import App from "./App";

export = createStory(() => (
	<StoreProvider store={configureStore()}>
		<App />
	</StoreProvider>
));
