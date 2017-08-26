import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    constructor(public afAuth: AngularFireAuth) {
    }


    register(username: string, email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(username, password)
            .then((user) => {
                const updateName: { displayName: string } = { displayName: username };
                user.updateProfile(updateName);
            });
    }
}
