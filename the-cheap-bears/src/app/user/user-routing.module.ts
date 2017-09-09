import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserCarComponent } from './user-car/user-car.component';

import { AuthGuard } from './../shared/guards/auth.guard';
import { LoggedGuard } from './../shared/guards/logged.guard';
import { UserResolverService } from './shared/user-resolver.service';

const userRoutes: Routes = [
    { path: 'register', component: RegisterComponent, canActivate: [LoggedGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
    {
        path: 'profile', component: ProfilePageComponent,
        canActivate: [AuthGuard],
        resolve: { userData: UserResolverService },
    },
    { path: 'car', component: UserCarComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class UserRoutingModule { }
