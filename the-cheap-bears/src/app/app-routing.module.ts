import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/not-found/not-found.component';

import { TripsResolver } from './shared/resolvers/trips-resolver.service';

const appRoutes: Routes = [
    { path: 'trips', loadChildren: './trips/trips.module#TripsModule' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        TripsResolver,
    ]
})

export class AppRoutingModule { }
