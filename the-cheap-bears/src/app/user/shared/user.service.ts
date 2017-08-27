import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { User } from '../../models/user';

@Injectable()
export class UserService {

    constructor(public afAuth: AngularFireAuth) {
    }

    register(user: User ) {
       return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((newUser) => {
                const updateName: { displayName: string } = { displayName: user.username };
                return newUser.updateProfile(updateName);
            });
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
}
