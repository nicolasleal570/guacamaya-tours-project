import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  getDocById(collectionPath: string, docId: string){
    return this.afs.collection(collectionPath).doc(docId).snapshotChanges();
  }

  getDocs(collectionPath: string){
    return this.afs.collection(collectionPath).snapshotChanges();
  }

  createDoc(collectionPath: string, data: any){
    return this.afs.collection(collectionPath).add(data);
  }

  updateDoc(collectionPath: string, data: any, docId: string){
    return this.afs.collection(collectionPath).doc(docId).update(data);
  }

  deleteDoc(collectionPath: string, docId: string){
    return this.afs.collection(collectionPath).doc(docId).delete();
  }

}
