import { Injectable } from '@angular/core';
import { Destino } from '../models/destino';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  destinos: Destino[] = [
    {
      $key: 'TOJWHVH',
      name: 'Los Roques',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum officia accusamus vitae aliquid in quasi sequi dolorem ullam maiores.',
      category: {
        $key: 'pvhuwun',
        name: 'Tropico',
        img: ''
      },
      location: {
        $key: 'QPEICBNEU',
        latitud: '',
        longitud: '',
        direction: ''
      },
      imgBanner: 'assets/img/los-roques.jpg',
      state: {
        $key: 'VNCBRYEUH',
        name: 'Archipielago',
        description: '',
        image: ''
      }
    },
    {
      $key: 'AWVOZEW',
      name: 'Margarita',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum officia accusamus vitae aliquid in quasi sequi dolorem ullam maiores.',
      category: {
        $key: 'mprtatx',
        name: 'Tropico',
        img: ''
      },
      location: {
        $key: 'PDRAQWC',
        latitud: '',
        longitud: '',
        direction: ''
      },
      imgBanner: 'assets/img/los-roques.jpg',
      state: {
        $key: 'ZDTOHFRA',
        name: 'Isla',
        description: '',
        image: ''
      }
    },
    {
      $key: 'GURFSWEH',
      name: 'Merida',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum officia accusamus vitae aliquid in quasi sequi dolorem ullam maiores.',
      category: {
        $key: 'lptwesx',
        name: 'Nieve',
        img: ''
      },
      location: {
        $key: 'QPWODLG',
        latitud: '',
        longitud: '',
        direction: ''
      },
      imgBanner: 'assets/img/merida2.jpg',
      state: {
        $key: 'VNCBRYEUH',
        name: 'Ciudad',
        description: '',
        image: ''
      }
    },
    {
      $key: 'QWSXCVBG',
      name: 'Medanos de Coro',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum officia accusamus vitae aliquid in quasi sequi dolorem ullam maiores.',
      category: {
        $key: 'pvhuwun',
        name: 'Desierto',
        img: ''
      },
      location: {
        $key: 'QPEICBNEU',
        latitud: '',
        longitud: '',
        direction: ''
      },
      imgBanner: 'assets/img/medanos.png',
      state: {
        $key: 'VNCBRYEUH',
        name: 'Medanos',
        description: '',
        image: ''
      }
    },
    {
      $key: 'POIUYTGHJ',
      name: 'Gran Sabana',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum officia accusamus vitae aliquid in quasi sequi dolorem ullam maiores.',
      category: {
        $key: 'pvhuwun',
        name: 'Selva',
        img: ''
      },
      location: {
        $key: 'QPEICBNEU',
        latitud: '',
        longitud: '',
        direction: ''
      },
      imgBanner: 'assets/img/granSabana.jpg',
      state: {
        $key: 'VNCBRYEUH',
        name: 'Sabana',
        description: '',
        image: ''
      }
    }
  ];

  constructor() { }

  get getDestinos(): Observable<Destino[]> {

    return new Observable<Destino[]>(observer => {
      setTimeout(() => {
        observer.next(this.destinos);
      }, 1000);
    });

  }

  getDestinoFromId(id: string) {
    return this.destinos.find((destino: Destino) => {
      return destino.$key === id;
    });
  }

}
