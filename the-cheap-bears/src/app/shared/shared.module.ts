import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { LoggedGuard } from './guards/logged.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoaderComponent } from './loader/loader.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';

@NgModule({
    declarations: [
        LoaderComponent,
        TimeFormatPipe,
    ],
    providers: [
        AuthService,
        DataService,
        AuthGuard,
        LoggedGuard
    ],
    exports: [
        LoaderComponent,
        TimeFormatPipe,
    ]
})
export class SharedModule { }
