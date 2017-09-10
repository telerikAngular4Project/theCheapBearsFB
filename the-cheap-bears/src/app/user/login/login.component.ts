import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { passwordRegEx } from './../../helpers/patterns';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    error = false;
    errorMessage: string;
    submitted: boolean;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.submitted = false;
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(passwordRegEx)]],
        });
    }

    get email(): any { return this.loginForm.get('email'); }
    get password(): any { return this.loginForm.get('password'); }

        onSubmit() {
            const userData = this.loginForm.value;
            this.userService.login(userData.email, userData.password)
            .then(() => {
                this.submitted = true;
                setTimeout(() => {
                    this.router.navigateByUrl('');
                }, 2000);
            })
            .catch((err) => {
                this.error = true;
                this.errorMessage = err.message;
                setTimeout (() => {
                    this.error = false;
                }, 2000);
            });
        }

}
