import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

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
  currUserId: string;
  driver: any;
  passenger: any;
  isButtonDisabled = false;
  show = false;

  constructor(private activeRoute: ActivatedRoute,
              private dataService: DataService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.activeRoute
      .queryParams.subscribe((params) => {
      this.tripId = params['id'];
    });

    this.dataService.queryByKey('trips', this.tripId)
      .flatMap(data => {
        this.trip = data;
        if (this.trip.freeSeats <= 0) {
          this.isButtonDisabled = true;
        }

        return this.dataService.queryByKey('users', this.trip.userId);
      })
      .subscribe((userFromDB) => {
        this.driver = userFromDB;
        this.show = true;
      });
  }

  reserveSeat() {
    this.currUserId = this.authService.getCurrentUserId();
    this.dataService.queryByKey('users', this.currUserId ).subscribe((user) => {
      this.passenger = user;
    });

    this.trip.passengers.push(this.passenger);
    this.trip.freeSeats -= 1;

    if (this.trip.freeSeats === 0) {
      this.isButtonDisabled = true;
    }

    this.dataService.updateCollection('trips', this.tripId, this.trip);
  }
}
