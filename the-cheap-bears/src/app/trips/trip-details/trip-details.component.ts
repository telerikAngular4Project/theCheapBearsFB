import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';

import { DataService } from '../../shared/services/data.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
    selector: 'app-trip-details',
    templateUrl: './trip-details.component.html',
    styleUrls: ['./trip-details.component.css'],
})

export class TripDetailsComponent implements OnInit {
    tripId: string;
    trip: any;
    driver: any;
    show = false;

    constructor(
        private activeRoute: ActivatedRoute,
        private dataService: DataService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.activeRoute
            .queryParams.subscribe((params) => {
                this.tripId = params['id'];
            });

        this.dataService.queryByKey('trips', this.tripId)
            .flatMap(data => {
                this.trip = data;
                return this.dataService.queryByKey('users', this.trip.userId);
            })
            .subscribe((userFromDB) => {
                this.driver = userFromDB;
                this.show = true;
            });
    }

    reserveSeat() {
        // this.trip.freeSeats - 1;
        // this.trip.passengers.push()
    }
}
