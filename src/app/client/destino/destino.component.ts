import { Component, OnInit, Input } from '@angular/core';
import { Destino } from 'src/app/models/destino';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {

  constructor() { }
  // @Input name: string;
  // @Input categorie: string;

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
      services: [
        'Servicio 1',
        'Servicio 1',
        'Servicio 1',
        'Servicio 1',
      ],
      activities: [
        'Actividiad 1',
        'Actividiad 1',
        'Actividiad 1',
        'Actividiad 1',
      ],
      state: {
        $key: 'VNCBRYEUH',
        name: 'Archipielago',
        description: '',
        image: ''
      }
    }
  ];

  ngOnInit() {

  }

}
