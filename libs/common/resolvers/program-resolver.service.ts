import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take, filter } from 'rxjs/operators';
import { ProgramSelectors } from '@libs/common/store';
@Injectable({
	providedIn: 'root',
})
export class ProgramResolverService implements Resolve<Observable<boolean>> {
	@Select(ProgramSelectors.isInitialized) isInitialized$: Observable<boolean>;
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.isInitialized$.pipe(
			filter((q) => !!q),
			take(1)
		);
	}
}