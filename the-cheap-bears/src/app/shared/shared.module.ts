import { LoggedGuard } from './guards/logged.guard';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  providers: [
      AuthService,
      DataService,
      AuthGuard,
      LoggedGuard
    ]
})
export class SharedModule { }
