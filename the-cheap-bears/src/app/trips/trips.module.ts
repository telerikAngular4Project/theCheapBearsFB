import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePickerModule } from 'ng2-datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TripsRoutingModule } from './trips-routing.module';
import { SharedModule } from './../shared/shared.module';

import { TripsListingComponent } from './trips-listing/trips-listing.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripItemComponent } from './trip-item/trip-item.component';

import { TripsService } from './services/trips.service';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { FilterTripsPipe } from './pipes/filter-trips.pipe';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TripsRoutingModule,
        DatePickerModule,
        TimepickerModule.forRoot(),
    ],
    declarations: [
        TripsListingComponent,
        TripCreateComponent,
        TripItemComponent,
        TripDetailsComponent,
        FilterTripsPipe,
    ],
    providers: [
        TripsService,
    ],
    exports: [
        TripItemComponent,
    ]
})

export class TripsModule { }
