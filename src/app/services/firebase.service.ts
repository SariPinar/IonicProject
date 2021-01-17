import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Stocks';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_stock(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_stock() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_stock(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_stock(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
