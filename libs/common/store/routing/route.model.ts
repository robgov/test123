export class RouteModel {
	public primaryRoute: string;
	public auxiliaryRoute: string;
	public id: string;

	constructor(init?: Partial<RouteModel>) {
		Object.assign(this, init);
	}
}
