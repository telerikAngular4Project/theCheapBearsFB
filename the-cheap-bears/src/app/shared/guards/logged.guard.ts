import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isLogged().map((user) => {
            if (user) {
                this.router.navigate(['/']);
                return false;
            } else {
                return true;
            }
        });
    }
}
