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

export class RegisterComponent {

    private registerForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.createForm();
    }

    createForm() {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, Validators.pattern(usernameRegEx)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(passwordRegEx)]],
        });
    }

    get username() { return this.registerForm.get('username'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }

    submitted = false;

    // form submit
    onSubmit() {
        const userData = this.registerForm.value;
        this.userService.register(userData)
        .then(() => {
            this.submitted = true;
            setTimeout(() => {
                this.router.navigateByUrl('');
            }, 3000);
        })
        .catch((err) => {
            console.log(err.message);
            //do something with errors(this is serverside validation)
        });
    }
}
