import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;

    constructor(private _afAuth: AngularFireAuth) {
        this.user = _afAuth.authState;
    }

    isLogged() {
        return this.user;
    }

    getCurrentUserId() {
        const curUser = firebase.auth().currentUser;
        if (curUser) {
            return curUser.uid;
        }
    }

    getCurrentUser() {
        return this.user;
    }

    logOut() {
        return this._afAuth.auth.signOut();
    }
}
