import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  constructor() { }
  @Input() hotel: Hotel;

  ngOnInit() {
  }

}
