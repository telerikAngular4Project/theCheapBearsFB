import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
    user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }



    logOut() {
        return this.afAuth.auth.signOut();
    }

}
