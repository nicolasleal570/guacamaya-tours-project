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
  hotelsLoading: boolean = false;
  categoriesLoading: boolean = false;

  constructor(private hotelService: AdminHotelService) {
  }

  ngOnInit() {
    this.getFamousHotels();
    
  }

  getFamousHotels() {
    this.hotelsLoading = true;
    this.hotelService.getFamousHotels().then((array) => {
      array.forEach((item) => {
        const hotel: Hotel = {
          $key: item.id,
          name: item.get('name'),
          stars: item.get('stars'),
          location: item.get('location'),
          stateId: item.get('SstateId'),
          destinoId: item.get('destinoId'),
          imgPresentation: item.get('imgPresentation'),
          gallery: item.get('gallery'),
          fullDay: item.get('fullDay'),
          services: item.get('services'),
          activities: item.get('activities')
        }
      });
    });
  }

}
