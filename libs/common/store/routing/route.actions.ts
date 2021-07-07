import { RouteModel } from "./route.model";

/* eslint-disable @typescript-eslint/no-namespace */
export namespace RouteAction {
	export class GoToHome {
		static readonly type = '[Route] GoToHome';
	}

	export class Timeout {
		static readonly type = '[Route] Timeout';
	}
	export class GoToAccount {
		static readonly type = '[Route] GoToAccount';
	}
	export class GoTo {
		static readonly type = '[Route] GoTo';
		constructor(public model: Partial<RouteModel>) {}
	}
	export class GoToDashboard {
		static readonly type = '[Route] GoToDashboard';
	}
}
