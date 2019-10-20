import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {

  constructor() { }
  // @Input name: string;
  // @Input categorie: string;

  hotels: any[] = [];

  ngOnInit() {
    this.hotels = [
      {
        name: 'Posada La Ardileña',
        description: 'Super cool',
        services: [
          { name: 'Servicio 1' },
          { name: 'Servicio 2' },
          { name: 'Servicio 3' },
          { name: 'Servicio 4' },
        ],
        activities: [
          { name: 'Actividad 1' },
          { name: 'Actividad 2' },
          { name: 'Actividad 3' },
          { name: 'Actividad 4' },
        ],
        img: 'assets/img/la-ardilena.jpg'
      },
      {
        name: 'Posada Caracol',
        description: 'Super cool',
        services: [
          { name: 'Servicio 1' },
          { name: 'Servicio 2' },
          { name: 'Servicio 3' },
          { name: 'Servicio 4' },
        ],
        activities: [
          { name: 'Actividad 1' },
          { name: 'Actividad 2' },
          { name: 'Actividad 3' },
          { name: 'Actividad 4' },
        ],
        img: 'assets/img/posada-caracol.jpg'
      }
    ]

  }

}
