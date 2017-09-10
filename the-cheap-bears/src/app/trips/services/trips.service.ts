import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { AuthService } from '../../shared/services/auth.service';
import { DataService } from './../../shared/services/data.service';

import { Trip } from '../../models/trip';

@Injectable()
export class TripsService {
    private _townsUrl = './../../../assets/cities/cities.json';
    private trip: Trip;

    constructor(
        private http: Http,
        private _authService: AuthService,
        private dataService: DataService) {
    }

    getAllTowns() {
        return this.http.get(this._townsUrl)
            .map((response: Response) =>
                response.json());
    }

    getCurrentDate() {
        const today: Date = new Date();
        let dd: number|string = today.getDate();
        let mm: number|string = today.getMonth() + 1;
        const yyyy: number|string = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return `${dd}.${mm}.${yyyy}`;
    }

    createNewTrip(tripData) {
        const userId = this._authService.getCurrentUserId();
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
        this.trip.luggage = tripData.luggage;
        this.trip.additionalComment = tripData.additionalComment;
        this.trip.createdOn = this.getCurrentDate();
        this.trip.userId = userId;
        this.trip.passengers = ['.'];
        this.trip.car = tripData.cars;

        return this.dataService.pushNewItem('trips', this.trip);
    }
}
