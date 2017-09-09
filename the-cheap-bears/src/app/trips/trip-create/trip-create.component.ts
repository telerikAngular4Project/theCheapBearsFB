import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from './../../shared/services/data.service';
import { TripsService } from '../services/trips.service';
import { AuthService } from './../../shared/services/auth.service';

@Component({
    selector: 'app-trip-create',
    templateUrl: './trip-create.component.html',
    styleUrls: ['./trip-create.component.css']
})

export class TripCreateComponent implements OnInit {
    tripForm: FormGroup;
    towns: any;
    userId: string;
    carList: any;

    public datePickerOptions = {
        format: 'DD.MM.YYYY',
        locale: 'bg',
        minDate: new Date(),
        maxDate: (() => {
            const date = new Date();
            date.setDate(date.getDate() + 50);
            return date;
        })(),
    };

    constructor(
        private _router: Router,
        private _tripService: TripsService,
        private _fb: FormBuilder,
        private dataService: DataService,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.createForm();
        this._tripService.getAllTowns()
            .subscribe((townsData) => this.towns = townsData.sort());
        this.userId = this.authService.getCurrentUserId();
        this.dataService.getCollection(`users/${this.userId}/cars`)
            .subscribe((cars) => {
                if (cars.length === 0) {
                    this.tripForm.controls['cars'].disable();
                }
                this.carList = cars;
            });
    }

    createForm() {
        this.tripForm = this._fb.group({
            'fromCity': ['', Validators.required],
            'toCity': ['', Validators.required],
            'date': ['', Validators.required],
            'departureTime': ['', Validators.required],
            'price': ['', [Validators.required, Validators.min(1), Validators.max(100)]],
            'luggage': ['', Validators.required],
            'seats': ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            'cars': ['', ],
            'additionalComment': ['', Validators.maxLength(100)]
        });
    }

    get departureTime(): any {
        return this.tripForm.get('departureTime');
    }

    get price(): any {
        return this.tripForm.get('price');
    }

    get seats(): any {
        return this.tripForm.get('seats');
    }

    submitTripData(tripData) {
        this._tripService.createNewTrip(tripData).then(() => {
            this._router.navigateByUrl('/trips');
        });
    }
}

