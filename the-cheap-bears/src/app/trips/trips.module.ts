import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePickerModule } from 'ng2-datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsListingComponent } from './trips-listing/trips-listing.component';
import { TripCreateComponent } from './trip-create/trip-create.component';

import {TripsService} from './services/trips.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    TripsRoutingModule,
    DatePickerModule,
    TimepickerModule.forRoot(),
  ],
  declarations: [
    TripsListingComponent,
    TripCreateComponent
  ],
  providers: [TripsService]
})

export class TripsModule { }
