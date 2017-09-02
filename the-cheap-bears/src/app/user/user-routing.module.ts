import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const userRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes),
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }
