import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Hotel } from '../models/hotel';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class AdminHotelService {

  private hotelCollection: AngularFirestoreCollection<Hotel>;
  private habsCollection: AngularFirestoreCollection<Room>;

  constructor(private afs: AngularFirestore) {
    this.hotelCollection = this.afs.collection<Hotel>('hotels');
    this.habsCollection = this.afs.collection<Room>('rooms');
  }

  getHotelById(docId: string) {
    return this.hotelCollection.doc<Hotel>(docId).snapshotChanges()  ;
  }

  getFamousHotels(){
    return this.hotelCollection.ref.where('stars', '>', 3).get();
  }

  getHotelsInDestino(destinoId: string){
    return this.hotelCollection.ref.where('destinoId', '==', destinoId).get();
  }
  getHotelsInState(stateId: string){
    return this.hotelCollection.ref.where('stateId', '==', stateId).get();
  }

  getHotels() {
    return this.hotelCollection.snapshotChanges();
  }

  createHotel(data: Hotel) {
    return this.hotelCollection.add(data);
  }

  updateHotel(data: any, docId: string) {
    return this.hotelCollection.doc<Hotel>(docId).update(data);
  }

  deleteHotel(docId: string) {
    return this.hotelCollection.doc<Hotel>(docId).delete().then(success => {

      // BORRA TODAS LAS HABITACIONES LIGADAS AL HOTEL
      this.habsCollection.ref.where("hotelId", "==", docId).get().then(array => {
        array.forEach(item => {
          item.ref.delete();
        });
      });
    });
  }

}
