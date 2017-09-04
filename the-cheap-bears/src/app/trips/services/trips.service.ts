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

    public getAllTowns() {
        return this.http.get(this._townsUrl)
            .map((response: Response) =>
                response.json());
    }

    public getAllTrips() {
        return this.tripsCollectionFb;
    }

    public createNewTrip(tripData) {
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
        this.trip.createdOn = new Date();
        this.trip.userId = userId;

        return this.dataService.queryByKey('users', userId).subscribe((userData) => {
            console.log(userData);
            this.trip.author = userData.username;
            this.trip.phonenumber = userData.phonenumber || 'No phone number provided!';
            this.trip.profileImageUrl = userData.profileImageUrl || './../../../assets/images/default-profile.png';
            console.log(this.trip);
            return this.tripsCollectionFb.push(this.trip);
        });
    }
}
