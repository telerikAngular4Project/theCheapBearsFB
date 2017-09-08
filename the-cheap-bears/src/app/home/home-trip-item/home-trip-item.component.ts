import { Component, OnInit, Input } from '@angular/core';

import { DataService } from './../../shared/services/data.service';

import { Trip } from './../../models/trip';

@Component({
    selector: 'app-home-trip-item',
    templateUrl: './home-trip-item.component.html',
    styleUrls: ['./home-trip-item.component.css']
})
export class HomeTripItemComponent implements OnInit {

    user: any;
    userId: string;
    show: boolean;
    departureTime: any;

    constructor(
        private dataService: DataService,
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

}
