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

    getCurrentUserId() {
      return firebase.auth().currentUser.uid;
    }

    logOut() {
        return this._afAuth.auth.signOut();
    }
}
