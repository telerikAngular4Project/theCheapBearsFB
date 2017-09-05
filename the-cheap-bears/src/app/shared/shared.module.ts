import { LoggedGuard } from './guards/logged.guard';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [
        LoaderComponent,
    ],
    providers: [
        AuthService,
        DataService,
        AuthGuard,
        LoggedGuard
    ],
    exports: [LoaderComponent]
})
export class SharedModule { }
