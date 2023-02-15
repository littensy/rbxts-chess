import Roact from "@rbxts/roact";
import { RunService } from "@rbxts/services";

interface RootProps extends Roact.PropsWithChildren {}

export default function Root({ [Roact.Children]: children }: RootProps) {
	return RunService.IsRunning() ? (
		<screengui ResetOnSpawn={false} ZIndexBehavior="Sibling" IgnoreGuiInset>
			{children}
		</screengui>
	) : (
		<>{children}</>
	);
}
