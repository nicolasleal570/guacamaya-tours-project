import { Injectable } from '@angular/core';
import { State } from '../models/state';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Room } from '../models/room';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class AdminRoomsService {

  private stateCollection: AngularFirestoreCollection<Room>;

  constructor(private afs: AngularFirestore) {
    this.stateCollection = this.afs.collection<Room>('rooms');
  }

  getRoomById(docId: string) {
    return this.stateCollection.doc(docId).snapshotChanges()  ;
  }

  getRoomFromHotel(hotelId: string){
    return this.afs.collection<Hotel>('hotels').ref.where('hotelId', '==', hotelId).get();
  }

  getRooms() {
    return this.stateCollection.snapshotChanges();
  }

  createRoom(data: Room) {
    return this.stateCollection.add(data);
  }

  updateRoom(data: any, docId: string) {
    return this.stateCollection.doc(docId).update(data);
  }

  deleteRoom(docId: string) {
    return this.stateCollection.doc(docId).delete();
  }

}
