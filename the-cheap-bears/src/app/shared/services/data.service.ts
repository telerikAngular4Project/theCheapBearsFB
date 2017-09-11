import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';


@Injectable()
export class DataService {

    collection: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) {
    }

    getCollection(collectionName: string) {
        return this.collection = this.db.list(collectionName);
    }

    updateCollection(collectionName: string, key: string, data: Object) {
        this.collection = this.getCollection(collectionName);
        return this.collection.update(key, data);
    }

    queryCollection(collectionName: string, queryParameter: Object) {
        return this.db.list(collectionName, queryParameter);
    }

    queryByKey(collectionName, key) {
        return this.db.object(`/${collectionName}/${key}`);
    }

    uploadProfileImage(image, bucket, uid) {
        const storageRef = firebase.storage().ref();
        const userImageRef = storageRef.child(`images/ ${uid}`);
        return userImageRef.put(image);
    }

    pushNewItem(collectionName: string, item: Object) {
        this.collection = this.getCollection(collectionName);
        return this.collection.push(item);
    }

    removeItem(collectionName: string, key: string) {
        this.collection = this.getCollection(collectionName);
        return this.collection.remove(key);
    }

    deleteTrip(tripId) {
        return this.db.object(`/trips/${tripId}`).remove();
    }
}
