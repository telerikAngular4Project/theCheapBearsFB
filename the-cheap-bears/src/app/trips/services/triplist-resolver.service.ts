import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { TripsService } from './trips.service';

@Injectable()
export class TripsListResolver implements Resolve<any> {
    constructor(
        private router: Router,
        private tripsService: TripsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.tripsService.getAllTrips()
        .map((x) => x)
        .first();
    }
}
