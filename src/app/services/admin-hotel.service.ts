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
  }

  getHotelById(docId: string) {
    return this.hotelCollection.doc<Hotel>(docId).snapshotChanges()  ;
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
