import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { User } from '../../models/user';

@Injectable()
export class UserService {

    users: FirebaseListObservable<any>;
    trips: FirebaseListObservable<any>;

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase
    ) {
        this.users = this.db.list('/users');
        this.trips = this.db.list('/trips');
    }

    register(user: User) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((newUser) => {
                // tslint:disable-next-line
                const defaultUrl = 'https://firebasestorage.googleapis.com/v0/b/thecheapbears-38177.appspot.com/o/images%2Fdefault-profile.png?alt=media&token=62b95b3d-f74b-455d-84f3-75ab7405f69a';
                this.db.object('/users/' + newUser.uid).set({ username: user.username, email: user.email, profileImageUrl: defaultUrl });
                return newUser.updateProfile({ displayName: user.username });
            });
    }

    login(email: string, password: string) {
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password);
    }

    getCurrentUser() {
        const user = this.afAuth.auth.currentUser;
        return user;
    }

    uploadProfileImage(image, uid) {
        const storageRef = firebase.storage().ref();
        return storageRef.child(`images/ ${uid}`).put(image);
    }
}
