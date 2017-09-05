import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Trip } from './../../models/trip';

@Component({
  selector: 'app-trips-listing',
  templateUrl: './trips-listing.component.html',
  styleUrls: ['./trips-listing.component.css']
})
export class TripsListingComponent implements OnInit {

  tripsList: any;
  show: boolean;

  constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
    ) { }

  ngOnInit() {
     this.dataService.getCollection('trips').subscribe((data) => {
        this.show = true;
        this.tripsList = data;
    });
  }
}
