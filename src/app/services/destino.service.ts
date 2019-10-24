import { Injectable } from '@angular/core';
import { Destino } from '../models/destino';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  destinos: Destino[] = [
    {
      $key: 'wdvbnjg',
      name: 'Los Roques',
      description: '',
      category: {
        $key: 'sdfgh',
        name: 'Trópico',
        img: ''
      },
      location: {
        $key: '',
        latitud: '',
        longitud: '',
        direction: ''
      },
      state: {
        $key: '',
        name: 'Archipelago',
        description: '',
        image: ''
      }
    },
    {
      $key: 'oiuytg',
      name: 'La Tortuga',
      description: '',
      category: {
        $key: 'sdfgh',
        name: 'Trópico',
        img: ''
      },
      location: {
        $key: '',
        latitud: '',
        longitud: '',
        direction: ''
      },
      state: {
        $key: '',
        name: 'Archipelago',
        description: '',
        image: ''
      }
    },
    {
      $key: 'woctnjbu',
      name: 'Mérida',
      description: '',
      category: {
        $key: 'sdfgh',
        name: 'Nieve',
        img: ''
      },
      location: {
        $key: '',
        latitud: '',
        longitud: '',
        direction: ''
      },
      state: {
        $key: '',
        name: 'Archipelago',
        description: '',
        image: ''
      }
    },
  ];

  constructor() { }

  get getDestinos() {

    return new Observable<Destino[]>(observer => {
      setTimeout(() => {
        observer.next(this.destinos);
      }, 1000);
    });

  }

}
