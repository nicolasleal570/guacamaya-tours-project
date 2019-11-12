import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Hotel } from '../models/hotel';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHotelService {

  private hotelCollection: AngularFirestoreCollection<Hotel>;

  constructor(private afs: AngularFirestore) {
    this.hotelCollection = this.afs.collection<Hotel>('hotels');
  }

  getHotelById(docId: string) {
    return this.hotelCollection.doc(docId).snapshotChanges()  ;
  }

  getHotels() {
    return this.hotelCollection.snapshotChanges();
  }

  createHotel(data: Hotel) {
    return this.hotelCollection.add(data);
  }

  updateHotel(data: any, docId: string) {
    return this.hotelCollection.doc(docId).update(data);
  }

  deleteHotel(docId: string) {
    return this.hotelCollection.doc(docId).delete();
  }

}
