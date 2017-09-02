import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { User } from '../../models/user';

@Injectable()
export class UserService {

    users: any;
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
        this.users = this.db.list('/users');
    }

    register(user: User ) {
       return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((newUser) => {
                this.db.list('/users/' + newUser.uid).push({usename: user.username, email: user.email });
                return newUser.updateProfile({displayName: user.username});
            });
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
}
