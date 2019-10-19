import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  hotels: any[] = [];

  constructor() {
    this.hotels =  [
      { 
        name: 'Hotel Hesperia',
        description: '',
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
        img: 'assets/img/hesperia.jpg'
     },
     { 
       name: 'Posada La Ardileña',
       description: '',
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
       img: 'assets/img/posada.jpg'
    }
    ]

  }

  ngOnInit() {
  }

}
