import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels.subscribe(items => {
      items.forEach(item => {
        const data = item.payload.doc.data();
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          name: data.name,
          stars: data.stars,
          location: data.location,
          stateId: data.stateId,
          imgPresentation: data.imgPresentation,
          gallery: data.gallery,
          fullDay: data.fullDay,
          services: data.services,
          activities: data.activities,
          rooms: data.rooms,
        }

        this.hotels.push(hotel);
      });
    });
  }

}
