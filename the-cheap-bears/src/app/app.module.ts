import { SharedModule } from './shared/shared.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        HomeModule,
        UserModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [
        Title,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
