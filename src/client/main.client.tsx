import Roact from "@rbxts/roact";
import { withHookDetection } from "@rbxts/roact-hooked";
import { StoreProvider } from "@rbxts/roact-rodux-hooked";
import { Players } from "@rbxts/services";
import App from "./components/App";
import { configureStore } from "./store/store";

const store = configureStore();

withHookDetection(Roact);

Roact.mount(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	Players.LocalPlayer.WaitForChild("PlayerGui"),
);
