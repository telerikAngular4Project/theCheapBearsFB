import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ AuthService, DataService ]
})
export class SharedModule { }
