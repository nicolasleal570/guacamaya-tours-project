import { Component, OnInit } from '@angular/core';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Hotel } from 'src/app/models/hotel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: AdminHotelService) {
  }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(array => {
      this.hotels = array.map(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        if (hotel.stars > 4) {
          return hotel;
        }
      });
    });
  }

}
