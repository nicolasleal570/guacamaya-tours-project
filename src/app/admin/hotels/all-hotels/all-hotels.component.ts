import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss']
})
export class AllHotelsComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hService: HotelService) {
    this.hService.getHotels.subscribe(hotel => {
      this.hotels = hotel;
    });
  }

  ngOnInit() {
  }

}
