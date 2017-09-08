import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trip } from './../../models/trip';

@Component({
    selector: 'app-trips-listing',
    templateUrl: './trips-listing.component.html',
    styleUrls: ['./trips-listing.component.css']
})
export class TripsListingComponent implements OnInit {

    tripsList: any;
    show: boolean;
    q = 'q';

    constructor(
        private dataService: DataService,
    ) { }

    ngOnInit() {
        this.dataService.getCollection('trips')
            .subscribe((data) => {
                this.tripsList = data;
                this.show = true;
            });
    }
}
