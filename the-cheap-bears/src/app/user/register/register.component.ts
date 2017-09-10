import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { usernameRegEx, passwordRegEx } from './../../helpers/patterns';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;
    submitted: boolean;
    error = false;
    errorMessage: string;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.submitted = false;
        this.createForm();
    }


    createForm() {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, Validators.pattern(usernameRegEx)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(passwordRegEx)]],
        });
    }

    get username(): any { return this.registerForm.get('username'); }
    get email(): any { return this.registerForm.get('email'); }
    get password(): any { return this.registerForm.get('password'); }


    onSubmit() {
        const userData = this.registerForm.value;
        this.userService.register(userData)
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
