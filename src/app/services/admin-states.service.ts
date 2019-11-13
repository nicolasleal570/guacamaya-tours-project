import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { State } from '../models/state';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStatesService {

  private stateCollection: AngularFirestoreCollection<State>;

  constructor(private afs: AngularFirestore) {
    this.stateCollection = this.afs.collection<State>('states');
  }

  getStateById(docId: string) {
    return this.stateCollection.doc(docId).snapshotChanges();
  }

  getStates() {
    return this.stateCollection.snapshotChanges();
  }

  createState(data: State) {
    return this.stateCollection.add(data);
  }

  updateState(data: any, docId: string) {
    return this.stateCollection.doc(docId).update(data);
  }

  deletedState(docId: string) {
    return this.stateCollection.doc(docId).delete();
  }

}
