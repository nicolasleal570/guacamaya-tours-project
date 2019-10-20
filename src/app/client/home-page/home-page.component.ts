import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/models/hotel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotelService.getFamousHotels.subscribe(hotel => {
      this.hotels = hotel;
    });
  }

}
