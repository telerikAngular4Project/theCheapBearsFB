import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../shared/services/auth.service';
import { DataService } from './../../shared/services/data.service';

import { Trip } from './../../models/trip';

@Component({
    selector: 'app-trip-item',
    templateUrl: './trip-item.component.html',
    styleUrls: ['./trip-item.component.css']
})

export class TripItemComponent implements OnInit {

    user: any;
    userId: string;
    show: boolean;
    departureTime: any;

    constructor(
        private dataService: DataService,
        private authService: AuthService,
        public router: Router,
    ) { }


    @Input() trip: Trip;

    ngOnInit() {
        this.userId = this.trip.userId;
        this.departureTime = this.trip.departureTime;
        this.dataService.queryByKey('users', this.userId).
            subscribe((data) => {
                this.user = data;
                this.show = true;
            });
    }

    public delete(tripId: string) {
        this.dataService.deleteTrip(tripId);
    }
}
