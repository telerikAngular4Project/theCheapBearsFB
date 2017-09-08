import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripsListingComponent } from './trips-listing/trips-listing.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { MyTripsComponent } from './my-trips/my-trips.component';

import { AuthGuard } from './../shared/guards/auth.guard';

const tripsRoutes: Routes = [
    { path: '', component: TripsListingComponent },
    { path: 'create', component: TripCreateComponent, canActivate: [AuthGuard] },
    { path: 'details', component: TripDetailsComponent, canActivate: [AuthGuard] },
    { path: 'mine', component: MyTripsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(tripsRoutes)],
    exports: [RouterModule]
})
export class TripsRoutingModule { }
