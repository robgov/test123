import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterState, RouterStateModel } from '@ngxs/router-plugin';
import { Selector } from '@ngxs/store';

export class RouterSelectors {
    @Selector([RouterState])
	static getRouteId(state: RouterStateModel) {
		return this.findRouteId(state.state.root);
	}

    private static findRouteId(branch: ActivatedRouteSnapshot): string {
		if (branch.paramMap.has('id')) return branch.paramMap.get('id');
		for (const childBranch of branch.children) {
			return this.findRouteId(childBranch);
		}
		return null;
	}

    @Selector([RouterState])
	static getRoute(state: RouterStateModel) {
		return state.state.url;
	}
}