import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Itinerario } from '../models/itinerario';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  private itinerarioCollection: AngularFirestoreCollection<Reserva>;

  constructor(private afs: AngularFirestore) { 
    this.itinerarioCollection = this.afs.collection<Reserva>('reserva');
  }

  createReserva(data: Reserva) {
    return this.itinerarioCollection.add(data);
  }
}
