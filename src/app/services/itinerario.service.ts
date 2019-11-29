import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Itinerario } from '../models/itinerario';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  private itinerarioCollection: AngularFirestoreCollection<Itinerario>;

  constructor(private afs: AngularFirestore) { 
    this.itinerarioCollection = this.afs.collection<Itinerario>('itinerarios');
  }

  createItinerario(data: Itinerario) {
    return this.itinerarioCollection.add(data);
  }
}
