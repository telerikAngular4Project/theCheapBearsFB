import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


// all this will be one component called auth whis implements register and login in one template
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    authType: String = '';
    authForm: FormGroup;
    title: String = '';

    constructor(
        public afAuth: AngularFireAuth,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.authForm = this.fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.route.url.subscribe((data) => {
            this.authType = data[data.length - 1].path;
            this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
            if (this.authType === 'register') {
                this.authForm.addControl('username', new FormControl());
            }
        });
    }

    // this should go to the user service 
    register(username: string, email: string, password: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(username, password)
            .then((user) => {
                const updateName: { displayName: string } = { displayName: username };
                user.updateProfile(updateName);
            })
            .catch((err) => {
                const msg = err.message;
                console.log(msg);
            });
    }
}
