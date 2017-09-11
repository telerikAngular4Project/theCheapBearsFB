import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePickerModule } from 'ng2-datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TripsRoutingModule } from './trips-routing.module';
import { SharedModule } from './../shared/shared.module';

import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripsListingComponent } from './trips-listing/trips-listing.component';
import { TripItemComponent } from './trip-item/trip-item.component';

import { TripsService } from './services/trips.service';
import { FilterTripsPipe } from './pipes/filter-trips.pipe';
import { StringFromArrPipe } from './pipes/string-from-arr.pipe';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { MyTripsComponent } from './my-trips/my-trips.component';

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
        StringFromArrPipe,
        MyTripsComponent,
    ],
    providers: [
        TripsService,
    ],
    exports: [
        TripItemComponent,
    ]
})

export class TripsModule { }
