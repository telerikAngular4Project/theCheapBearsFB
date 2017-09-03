import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';

import {Trip} from '../../models/trip';
import {AuthService} from '../../shared/services/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TripsService {
  private _townsUrl = './../../../assets/cities/cities.json';
  private trip: Trip;
  private tripsCollectionFb: FirebaseListObservable<any>;

  constructor(private http: Http, private _authService: AuthService, private db: AngularFireDatabase) {
    this.tripsCollectionFb = this.db.list('/trips');
  }

  public getAllTowns() {
    return this.http.get(this._townsUrl)
      .map((response: Response) =>
        response.json());
  }

  public getAllTrips() {
    return this.tripsCollectionFb;
  }

  public createNewTrip(tripData): Observable<any> {
    this.trip = new Trip();
    this.trip.fromCity = tripData.fromCity;
    this.trip.toCity = tripData.toCity;
    this.trip.date = tripData.date.formatted;
    this.trip.departureTime = {
      hours: tripData.departureTime.getHours(),
      minutes: tripData.departureTime.getMinutes()
    };
    this.trip.price = tripData.price;
    this.trip.freeSeats = tripData.seats;
    this.trip.additionalComment = tripData.additionalComment;
    this.trip.createdOn = new Date();
    this.trip.userId = this._authService.getCurrentUserId();

    this.tripsCollectionFb.push(this.trip);
    return;
  }
}
