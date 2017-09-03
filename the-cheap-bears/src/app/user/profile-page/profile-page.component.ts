import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../shared/user.service';
import { DataService } from './../../shared/services/data.service';
import { AuthService } from './../../shared/services/auth.service';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {

    namesForm: FormGroup;
    users: any;
    user: any;
    userId: any;
    userData: any;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private dataService: DataService,
        private router: Router,
        private authService: AuthService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.createForms();
        this.userId = this.authService.getCurrentUserId();
        this.route.data.forEach((data) => this.userData = data.userData);
        console.log(this.userData);
    }

    createForms() {
        this.namesForm = this.fb.group({
            firstName: ['', [Validators.minLength(2)]],
            lastName: ['', [Validators.minLength(2)]],
        });
    }

    get firstName(): any { return this.namesForm.get('firstName'); }
    get lastName(): any { return this.namesForm.get('lastName'); }

    namesUpdateSubmit() {
        const namesData = this.namesForm.value;
        console.log(namesData.firstName);
        this.dataService.updateCollection('users', this.userId, {firstname: namesData.firstName, lastname: namesData.lastName })
        .then(() => {
            // popup message for succsess
        });
    }

}
