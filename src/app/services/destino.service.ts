import { Injectable } from '@angular/core';
import { Destino } from '../models/destino';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  destinoCollection: AngularFirestoreCollection<Destino>;
  destinos: Destino[] = [];

  constructor(private afs: AngularFirestore) { 
    this.destinoCollection = this.afs.collection('destinos');
  }

  get getDestinos(){

    return this.destinoCollection.snapshotChanges();

  }

  getDestinoFromId(id: string) {
    
    return this.destinos.find((destino: Destino) => {
      return destino.$key === id;
    });

  }

}
