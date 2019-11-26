import { Injectable } from '@angular/core';
import { State } from '../models/state';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Room } from '../models/room';

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

  getRooms() {
    return this.stateCollection.snapshotChanges();
  }

  getRoomFromHotel(hotelId: string){
    return this.stateCollection.ref.where('hotelId', '==', hotelId).get();
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
