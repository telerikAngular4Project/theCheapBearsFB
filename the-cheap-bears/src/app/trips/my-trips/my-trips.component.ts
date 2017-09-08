import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/services/data.service';
import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';

import { Trip } from './../../models/trip';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  tripsList: any;
  show: boolean;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    const uid = this.authService.getCurrentUserId();

    console.log(uid);

    this.dataService.queryCollection('trips', {
      query: {
        orderByChild: 'userId',
        equalTo: uid
      }
    })
      .subscribe((data) => {
        this.tripsList = data;
        this.show = true;
      });
  }
}
