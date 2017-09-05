import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { DataService } from './../services/data.service';

@Injectable()
export class TripsResolver implements Resolve<any> {
    constructor(
        private router: Router,
        private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.dataService.getCollection('trips')
        .map((x) => x)
        .first();
    }
}
