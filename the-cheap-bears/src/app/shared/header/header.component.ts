import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    userId: string;

    constructor(
        public authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    logOut() {
        this.authService.logOut()
            .then(() => {
                this.router.navigateByUrl('');
            });
    }
}
