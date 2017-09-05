import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Trip } from '../../models/trip';
import { AuthService } from '../../shared/services/auth.service';
import { DataService } from './../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TripsService {
    private _townsUrl = './../../../assets/cities/cities.json';
    private trip: Trip;
    private tripsCollectionFb: FirebaseListObservable<any>;

    constructor(
        private http: Http,
        private _authService: AuthService,
        private db: AngularFireDatabase,
        private dataService: DataService
    ) {
        this.tripsCollectionFb = this.db.list('/trips');
    }

    getAllTowns() {
        return this.http.get(this._townsUrl)
            .map((response: Response) =>
                response.json());
    }

    getAllTrips() {
        return this.tripsCollectionFb;
    }

    generateId() {
        const min = Math.ceil(1);
        const max = Math.floor(999999);
        return Date.now() + Math.floor(Math.random() * (max - min)) + min;
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
        this.trip.additionalComment = tripData.additionalComment;
        this.trip.createdOn = this.getCurrentDate();
        console.log(this.trip.createdOn);
        this.trip.id = this.generateId();
        this.trip.userId = userId;

        return this.dataService.queryByKey('users', userId).subscribe((userData) => {
            this.trip.author = userData.username;
            this.trip.phonenumber = userData.phonenumber || 'No phone number provided!';
            this.trip.profileImageUrl = userData.profileImageUrl || './../../../assets/images/default-profile.png';
            return this.tripsCollectionFb.push(this.trip);
        });
    }
}
