import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataService } from './../shared/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    trips: FirebaseListObservable<any[]>;
    users: FirebaseListObservable<any[]>;
    constructor(public dataService: DataService) { }

    ngOnInit() {
        this.trips = this.dataService.getCollection('trips');
        this.users = this.dataService.getCollection('users');
    }
}
