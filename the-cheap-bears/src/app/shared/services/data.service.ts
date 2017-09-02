import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {

    collection: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) {
    }

    getCollection(collectionName: string) {
        return this.collection = this.db.list(collectionName);
    }
}
