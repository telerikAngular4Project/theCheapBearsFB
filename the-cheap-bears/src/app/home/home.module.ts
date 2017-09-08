import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeTripItemComponent } from './home-trip-item/home-trip-item.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ],
    declarations: [
        HomeComponent,
        HomeTripItemComponent,
    ]
})
export class HomeModule { }
