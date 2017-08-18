import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: 'AIzaSyB3qq6qjhHGl2Ha9vAccD329AEwLoY1KxM',
    authDomain: 'thecheapbearsproject.firebaseapp.com',
    databaseURL: 'https://thecheapbearsproject.firebaseio.com',
    projectId: 'thecheapbearsproject',
    storageBucket: '',
    messagingSenderId: '864722532066'
}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
