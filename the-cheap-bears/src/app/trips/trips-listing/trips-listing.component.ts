import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TripsService } from '../services/trips.service';
import { Trip } from './../../models/trip';

@Component({
  selector: 'app-trips-listing',
  templateUrl: './trips-listing.component.html',
  styleUrls: ['./trips-listing.component.css']
})
export class TripsListingComponent implements OnInit {
  allTripsListing: any;
  tripsList: any;

  constructor(
      private _tripsService: TripsService,
      private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.allTripsListing = this._tripsService.getAllTrips();
    this.route.data.forEach((data) => this.tripsList = data.tripsList);
  }

}
