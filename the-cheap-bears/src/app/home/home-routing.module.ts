import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

import { TripsResolver } from './../shared/resolvers/trips-resolver.service';

const homeRoutes: Routes = [
    { path: '', component: HomeComponent, resolve: { tripsData: TripsResolver } },
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class HomeRoutingModule { }
