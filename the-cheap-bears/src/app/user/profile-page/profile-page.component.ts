import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../shared/user.service';
import { DataService } from './../../shared/services/data.service';
import { AuthService } from './../../shared/services/auth.service';

import * as firebase from 'firebase/app';

import { User } from './../../models/user';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {

    namesForm: FormGroup;
    phoneNumberForm: FormGroup;
    userInfoForm: FormGroup;
    user: any;
    userId: string;
    userData: User;
    url: string;
    tripsList: any;
    nameChanged: boolean;
    phoneNumberChanged: boolean;
    imageUploaded: boolean;
    userInfoChanged: boolean;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private dataService: DataService,
        private authService: AuthService,
        private route: ActivatedRoute,
    ) { }

    public datePickerOptions = {
        format: 'DD.MM.YYYY',
        locale: 'bg',
        minDate: new Date(),
        maxDate: (() => {
            const date = new Date();
            date.setDate(date.getDate() + 50);
            return date;
        })(),
    };

    ngOnInit() {
        this.createForms();
        this.userId = this.authService.getCurrentUserId();
        this.user = this.dataService.queryByKey('users', this.userId);
        this.route.data.forEach((data) => this.userData = data.userData);
        this.namesForm
            .setValue({
                firstName: this.userData.firstname || '',
                lastName: this.userData.lastname || '',
            });
        this.phoneNumberForm
            .setValue({
                phoneNumber: this.userData.phonenumber || '',
            });
        this.userInfoForm.setValue({
            userInfo: this.userData.description || '',
        });
    }

    createForms() {
        this.namesForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
        });
        this.phoneNumberForm = this.fb.group({
            phoneNumber: ['', [Validators.required]]
        });
        this.userInfoForm = this.fb.group({
            userInfo: '',
        });
    }

    get firstName(): any { return this.namesForm.get('firstName'); }
    get lastName(): any { return this.namesForm.get('lastName'); }
    get phoneNumber(): any { return this.phoneNumberForm.get('phoneNumber'); }
    get userInfo(): any { return this.userInfoForm.get('userInfo'); }

    namesUpdateSubmit() {
        const namesData = this.namesForm.value;
        this.dataService.updateCollection(
            'users',
            this.userId,
            { firstname: namesData.firstName, lastname: namesData.lastName })
            .then(() => {
                this.nameChanged = true;
                setTimeout(() => this.nameChanged = false, 2000);
            });
    }

    phoneNumberSubmit() {
        const phone = this.phoneNumberForm.value;
        this.dataService.updateCollection('users', this.userId, { phonenumber: phone.phoneNumber })
            .then(() => {
                this.phoneNumberChanged = true;
                setTimeout(() => this.phoneNumberChanged = false, 2000);
            });
    }

    imageUploadSubmit(event) {
        const image = event.srcElement.files[0];
        this.userService.uploadProfileImage(image, this.userId)
            .then((snapshot) => {
                this.url = snapshot.downloadURL;
                return this.dataService.updateCollection('users', this.userId, { profileImageUrl: this.url });
            })
            .then(() => {
                this.imageUploaded = true;
                setTimeout(() => this.imageUploaded = false, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    userInfoSubmit() {
        const userInfoData = this.userInfoForm.value;
        this.dataService.updateCollection('users', this.userId, { description: userInfoData.userInfo })
            .then(() => {
                this.userInfoChanged = true;
                setTimeout(() => this.userInfoChanged = false, 2000);
            });
    }

}

