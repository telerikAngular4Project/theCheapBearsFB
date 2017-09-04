import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


import { AuthService } from './../../shared/services/auth.service';
import { DataService } from './../../shared/services/data.service';

@Injectable()
export class UserResolverService implements Resolve<any> {
    constructor(
        private authService: AuthService,
        private dataService: DataService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.authService.getCurrentUser()
        .flatMap((user) => this.dataService.queryByKey('users', user.uid))
        .map((x) => x)
        .first();
    }
}
