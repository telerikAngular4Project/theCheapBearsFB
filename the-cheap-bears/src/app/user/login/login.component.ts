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
export class LoginComponent {

    private loginForm: FormGroup;
    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', [Validators.required, Validators.pattern(passwordRegEx)]],
        })
    }

    get email() { return this.loginForm.get('email') }
    get pwd() { return this.loginForm.get('pwd') }
    
        onSubmit() {
            const userData = this.loginForm.value;
            this.userService.login(userData.email, userData.pwd)
            .then(() => {
                this.router.navigateByUrl('');
            })
            .catch((err) => {
                console.log(err.message);
                //do something with errors(this is serverside validation)
            })
        }

}
