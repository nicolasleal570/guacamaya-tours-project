import { Component, OnInit, Input } from '@angular/core';
import { Destino } from 'src/app/models/destino';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {

  constructor() { }

  destinos: Destino[] = [
    {
      $key: 'TOJWHVH',
      name: 'Los Roques',
      description: '',
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
      description: '',
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
      description: '',
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

      state: {
        $key: 'VNCBRYEUH',
        name: 'Ciudad',
        description: '',
        image: ''
      }
    },
    {
      $key: 'TOJWHVH',
      name: 'Medannos de Coro',
      description: '',
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

      state: {
        $key: 'VNCBRYEUH',
        name: 'Medanos',
        description: '',
        image: ''
      }
    },
    {
      $key: 'TOJWHVH',
      name: 'Gran Sabana',
      description: '',
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

      state: {
        $key: 'VNCBRYEUH',
        name: 'Sabana',
        description: '',
        image: ''
      }
    }
  ];


  ngOnInit() {
  }

}
