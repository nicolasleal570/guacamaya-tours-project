import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Destino } from '../models/destino';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminDestinoService {

  private destinoCollection: AngularFirestoreCollection<Destino>;

  constructor(private afs: AngularFirestore) { 
    this.destinoCollection = this.afs.collection<Destino>('destinos');
  }

  getDestinoById(docId: string) {
    return this.destinoCollection.doc<Destino>(docId).snapshotChanges();
  }

  getDestinosByCategories(id: string){
    return this.destinoCollection.ref.where('categoryId', '==', id).get();
  }

  getDestinosByState(id: string){
    return this.destinoCollection.ref.where('stateId', '==', id).get();
  }

  getDestinos() {
    return this.destinoCollection.snapshotChanges();
  }

  createDestino(data: Destino) {
    return this.destinoCollection.add(data);
  }

  updateDestino(data: any, docId: string) {
    return this.destinoCollection.doc(docId).update(data);
  }

  deleteDestino(docId: string) {
    return this.destinoCollection.doc(docId).delete();
  }

}
