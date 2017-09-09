import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { DatePickerModule } from 'ng2-datepicker';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './../user/profile-page/profile-page.component';
import { UserCarComponent } from './user-car/user-car.component';

import { UserService } from './../user/shared/user.service';
import { UserResolverService } from './shared/user-resolver.service';
import { UserCarService } from './shared/user-car.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SharedModule,
        UserRoutingModule,
        DatePickerModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        ProfilePageComponent,
        UserCarComponent,
    ],
    providers: [
        UserService,
        UserResolverService,
        UserCarService,
    ]
})
export class UserModule { }
