import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs';
import { Destino } from '../models/destino';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotels: Hotel[] = [
    {
      $key: 'AKCHHRHSBCJ',
      name: 'Hotel Hesperia Margarita',
      stars: 4,
      imgPresentation: 'assets/img/hesperia-marg.jpg',
      location: {
        $key: 'WGBXZSUKL',
        latitud: '',
        longitud: '',
        direction: ''
      },
      state: {
        $key: 'IUYGFBGF',
        name: 'Distrito Capital',
        description: '',
        image: '',
      },
      gallery: [
        ''
      ],
      fullDay: false,
      services: [
        'Servicio 1',
        'Servicio 2',
        'Servicio 3',
      ],
      activities: [
        'Actividad 1',
        'Actividad 2',
        'Actividad 3',
      ],
      rooms: [

        {
          $key: '23EDVBG',
          name: 'Suite',
          gallery: [],
          maxPersons: 2,
          adventajes: [],
          pricePerson: 12
        },
        {
          $key: '23EQPVB',
          name: 'Individual',
          gallery: [],
          maxPersons: 1,
          adventajes: [],
          pricePerson: 12
        },
        {
          $key: '23EAKBY',
          name: 'Matrimonial',
          gallery: [],
          maxPersons: 4,
          adventajes: [],
          pricePerson: 12
        },

      ]

    },
    {
      $key: 'LOIJHYGBFDX',
      name: 'Posada',
      stars: 5,
      imgPresentation: 'assets/img/posada.jpg',
      location: {
        $key: 'WGBXZSUKL',
        latitud: '',
        longitud: '',
        direction: ''
      },
      state: {
        $key: 'IUYGFBGF',
        name: 'Distrito Capital',
        description: '',
        image: '',
      },
      gallery: [
        ''
      ],
      fullDay: false,
      services: [
        'Servicio 1',
        'Servicio 2',
        'Servicio 3',
      ],
      activities: [
        'Actividad 1',
        'Actividad 2',
        'Actividad 3',
      ],
      rooms: [
        {
          $key: 'AZXCASDCHGHF',
          name: 'Individual',
          gallery: [],
          maxPersons: 1,
          adventajes: [
            'Comodidad 1',
            'Comodidad 2',
            'Comodidad 3',
          ],
          pricePerson: 4
        }
      ]

    }
  ];

  constructor() { }

  get getHotels(): Observable<Hotel[]> {

    return new Observable<Hotel[]>(observer => {
      setTimeout(() => {
        observer.next(this.hotels);
      }, 1000);
    });

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

  getHotelById(id: string){
    return this.hotels.find((hotel: Hotel) => {
      return hotel.$key === id;
    });
  }

  getHotelsInDestino(state: string): Observable<Hotel[]> {

    return new Observable<Hotel[]>(observer => {
      setTimeout(() => {
        observer.next(
          this.hotels.filter((hotel: Hotel) => {
            return hotel.state.name === state;
          })
        );
      }, 1000);
    });
  }

  findRoomById(id: string) {
    return this.hotels.forEach((hotel: Hotel) => {
      hotel.rooms.find(room => {
        return room.$key === id;
      });
    });
  }

}
