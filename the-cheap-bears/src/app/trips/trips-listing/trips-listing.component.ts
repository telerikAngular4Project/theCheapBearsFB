import { Component, OnInit } from '@angular/core';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-trips-listing',
  templateUrl: './trips-listing.component.html',
  styleUrls: ['./trips-listing.component.css']
})
export class TripsListingComponent implements OnInit {
  allTripsListing: any;

  constructor(private _tripsService: TripsService) { }

  ngOnInit() {
    this._tripsService.getAllTrips().subscribe(listing => {
      console.log(listing);
      this.allTripsListing = listing;
    });
  }

}
