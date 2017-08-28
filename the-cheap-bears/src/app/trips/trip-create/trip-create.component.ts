import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TripsService } from '../services/trips.service';
import {Trip} from '../../models/trip';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent implements OnInit {
  tripForm: FormGroup;
  towns: any;
  trip: Trip;

  fromCity: string;
  toCity: string;
  departureTime: any;
  name: string;
  additionalComment: string;

  public datePickerOptions = {
    format: 'DD.MM.YYYY',
    locale: 'bg',
  };

  constructor( private _router: Router, private _tripService: TripsService, private _fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this._tripService.getAllTowns()
      .subscribe((townsData) => {
        this.towns = townsData.map((data) => data['name']);
      });
  }

  createForm() {
    this.tripForm = this._fb.group({
      'fromCity': ['', Validators.required],
      'toCity': ['', Validators.required],
      'date': ['', Validators.required],
      'departureTime': ['', Validators.required],
      'price': ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(100)])],
      'seats': ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])],
      'additionalComment': ['', Validators.maxLength(100)]
    });
  }

  submitTripData(tripData) {
    this._tripService.createNewTrip(tripData);

    this._router.navigateByUrl('/trips');
  }
}

