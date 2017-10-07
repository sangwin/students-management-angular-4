/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;

		if (localStorage.getItem('userData')) {
			return true;
		}else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */