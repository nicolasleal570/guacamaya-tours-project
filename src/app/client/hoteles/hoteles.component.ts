import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {

  constructor() { }

  hotels: Hotel[]= [
    {
      $key: "hjewgf",
      name: "Tamanaco Intercontinental",
      stars: 4,
      location: {
        $key: "hdgkhf",
        latitud: "hjgfj",
        longitud: "hgfku",
        direction: "fkf",
      },
      state:{
        $key: "",
        name: "Distrito Capital",
        description: "Estado principal de Venezuela",
        image: "",
      },
      imgPresentation: "adfwa",
      gallery: [],
      fullDay: false,
      services: [],
      activities: [],
      rooms: [],
    },

    {
      $key: "hjewgf",
      name: "Tamanaco Intercontinental",
      stars: 4,
      location: {
        $key: "hdgkhf",
        latitud: "hjgfj",
        longitud: "hgfku",
        direction: "fkf",
      },
      state:{
        $key: "",
        name: "Distrito Capital",
        description: "Estado principal de Venezuela",
        image: "",
      },
      imgPresentation: "adfwa",
      gallery: [],
      fullDay: false,
      services: [],
      activities: [],
      rooms: [],
    }
  ]
  

  ngOnInit() {
  }

}
