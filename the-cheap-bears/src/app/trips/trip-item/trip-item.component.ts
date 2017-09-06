import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';

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

    constructor(
        private dataService: DataService,
        private authService: AuthService,
    ) { }

    @Input() trip: Trip;

    ngOnInit() {
        this.userId = this.trip.userId;
        this.dataService.queryByKey('users', this.userId).
            subscribe((data) => {
                this.user = data;
                this.show = true;
            });
    }

}
