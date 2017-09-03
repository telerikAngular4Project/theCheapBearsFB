import { UserResolverService } from './shared/user-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './../user/shared/user.service';
import { ProfilePageComponent } from './../user/profile-page/profile-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        ProfilePageComponent,
    ],
    providers: [
        UserService,
        UserResolverService,
    ]
})
export class UserModule { }
