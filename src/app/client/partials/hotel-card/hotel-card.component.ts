import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: Hotel;
  @Input() darkColor: boolean = false;
  @Input() footer: boolean = false;
  estrellas: number[] = [];

  constructor() {

  }

  ngOnInit() {
    this.hacerEstrellas();
  }

  hacerEstrellas() {
    for (let i = 0; i < 5; i++) {
      if (i < this.hotel.stars) {
        this.estrellas[i] = 1;
      } else {
        this.estrellas[i] = 0;
      }
    }
  }

}
