import { ProfilePageComponent } from './../profile-page/profile-page.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { UserRoutingModule } from './../user-routing.module';
import { UserCarService } from './../shared/user-car.service';
import { AuthService } from './../../shared/services/auth.service';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SharedModule } from './../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UserCarComponent } from './user-car.component';
import { DataService } from './../../shared/services/data.service';

let comp: UserCarComponent;
let fixture: ComponentFixture<UserCarComponent>;

const filterTripsStub = {
    chep: 'chep',
};

describe('UserCarComponent', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                RegisterComponent,
                LoginComponent,
                ProfilePageComponent,
                UserCarComponent,
            ],
            imports: [
                HttpModule,
                FormsModule,
                ReactiveFormsModule,
                SharedModule,
                UserRoutingModule,
            ],
            providers: [
            ]
        })
            .overrideComponent(UserCarComponent, {
                set: {
                    providers: [
                        { provide: DataService, useClass: DataServiceSpy },
                        { provide: AuthService, useClass: AuthServiceSpy },
                        { provide: UserCarService, useClass: UserCarServiceSpy },
                    ]
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCarComponent);
        comp = fixture.componentInstance;
    });

    it('should create the component', (() => {
        expect(fixture).toBeTruthy();
    }));
});



class DataServiceSpy {

}

class AuthServiceSpy {

}

class UserCarServiceSpy {
    getMakeModels() {
        return ['Volvo', 'Opel', 'Citroen'];
    }

}
