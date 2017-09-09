import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './../user/shared/user.service';
import { UserResolverService } from './shared/user-resolver.service';
import { ProfilePageComponent } from './../user/profile-page/profile-page.component';
import { DatePickerModule } from 'ng2-datepicker';
import { UserCarComponent } from './user-car/user-car.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
    ]
})
export class UserModule { }
