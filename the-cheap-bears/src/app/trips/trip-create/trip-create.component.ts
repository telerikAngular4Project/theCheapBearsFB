import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TripsService } from '../services/trips.service';
import { Trip } from '../../models/trip';

@Component({
    selector: 'app-trip-create',
    templateUrl: './trip-create.component.html',
    styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent implements OnInit {
    tripForm: FormGroup;
    towns: any;
    trip: Trip;
    luggage: string;
    name: string;
    additionalComment: string;

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

    constructor(private _router: Router, private _tripService: TripsService, private _fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        this._tripService.getAllTowns()
            .subscribe((townsData) => {
                this.towns = townsData.geonames.map((data) => data['toponymName']).sort();
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
            'additionalComment': ['', Validators.maxLength(100)]
        });
    }

    get departureTime(): any { return this.tripForm.get('departureTime'); }
    get price(): any { return this.tripForm.get('price'); }
    get seats(): any { return this.tripForm.get('seats'); }

    submitTripData(tripData) {
        this._tripService.createNewTrip(tripData);
        this._router.navigateByUrl('/trips');
    }
}

