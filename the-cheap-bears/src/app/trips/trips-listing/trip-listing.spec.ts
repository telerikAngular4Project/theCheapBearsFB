import { DataService } from './../../shared/services/data.service';
import { TripDetailsComponent } from './../trip-details/trip-details.component';
import { TripCreateComponent } from './../trip-create/trip-create.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SharedModule } from './../../shared/shared.module';
import { TripsRoutingModule } from './../trips-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePickerModule } from 'ng2-datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { TripsListingComponent } from './trips-listing.component';
import { TripItemComponent } from './../trip-item/trip-item.component';
import { FilterTripsPipe } from './../pipes/filter-trips.pipe';

let comp: TripsListingComponent;
let fixture: ComponentFixture<TripsListingComponent>;

const filterTripsStub = {
    chep: 'chep',
};

describe('TripListingComponent', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                TripsListingComponent,
                TripItemComponent,
                FilterTripsPipe,
                TripCreateComponent,
                TripDetailsComponent,
            ],
            imports: [
                HttpModule,
                FormsModule,
                ReactiveFormsModule,
                SharedModule,
                TripsRoutingModule,
                DatePickerModule,
                TimepickerModule.forRoot(),
            ],
            providers: [
            ]
        })
            .overrideComponent(TripsListingComponent, {
                set: {
                    providers: [
                        { provide: DataService, useClass: DataServiceSpy }
                    ]
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TripsListingComponent);
        comp = fixture.componentInstance;
    });

    it('should create the component', (() => {
        expect(fixture).toBeTruthy();
    }));
});



class DataServiceSpy {

}
