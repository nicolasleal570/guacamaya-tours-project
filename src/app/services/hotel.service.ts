import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs';
import { Destino } from '../models/destino';
import { Room } from '../models/room';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotelCollection: AngularFirestoreCollection<Hotel>;
  hotels: Hotel[] = [];

  constructor(private afs: AngularFirestore) {
    this.hotelCollection = this.afs.collection('hotels');
  }

  get getHotels(){

    return this.hotelCollection.snapshotChanges();

  }

  get getFamousHotels(): Observable<Hotel[]> {

    return new Observable<Hotel[]>(observer => {
      setTimeout(() => {
        observer.next(
          this.hotels.filter((hotel: Hotel) => {
            return hotel.stars > 3;
          })
        );
      }, 1000);
    });

  }

  getHotelFromId(id: string){
    return this.hotels.find((hotel: Hotel) => {
      return hotel.$key === id;
    });
  }

}
