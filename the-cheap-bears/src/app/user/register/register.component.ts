import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../shared/user.service';
import { usernameRegEx, passwordRegEx } from './../../helpers/patterns';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.createForm();
    }

    createForm() {
        this.registerForm = this.fb.group({
            username: ['',[Validators.required]],
            email: ['',[Validators.required]],
            pwd: ['', [Validators.required]],
        })
    }

    get username() { return this.registerForm.get('username'); }
    get email() { return this.registerForm.get('email'); }
    get pwd() { return this.registerForm.get('pwd'); }

    // form submit
    onSubmit() {
        const userData = this.registerForm;
        console.log(userData);
        // this.userService.register(this.username, this.email, this.pwd)
        // .catch((err) => {
        //     //do something with errors(this is serverside validation)
        // })
    }

}
