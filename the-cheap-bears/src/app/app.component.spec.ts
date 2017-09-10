import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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

import { APP_BASE_HREF } from '@angular/common';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
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
                { provide: APP_BASE_HREF, useValue: '/' },
                Title
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it('should create the app', (() => {
        expect(fixture).toBeTruthy();
    }));
});
