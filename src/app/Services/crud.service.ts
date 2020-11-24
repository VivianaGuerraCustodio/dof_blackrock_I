import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Keywords } from '../Models/keywords.model';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public firestore: AngularFirestore) { }

  addKey(key: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`keywords/${id}`).set({ key });
  }

  deleteKey(keyId: string): Promise<void> {
    return this.firestore.doc(`keywords/${keyId}`).delete();
  }

  getKey(): Observable<Keywords[]> {
    return this.firestore.collection<Keywords>('keywords').valueChanges({ idField: 'id' });
  }

  addArrKey(key: Array<string>): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`keys/${id}`).set({ key });
  }
}
