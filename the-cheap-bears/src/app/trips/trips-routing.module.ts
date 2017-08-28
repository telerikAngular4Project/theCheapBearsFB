import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TripsListingComponent} from './trips-listing/trips-listing.component';
import {TripCreateComponent} from './trip-create/trip-create.component';

const tripsRoutes: Routes = [
  { path: 'trips', component: TripsListingComponent},
  { path: 'createTrip', component: TripCreateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(tripsRoutes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
