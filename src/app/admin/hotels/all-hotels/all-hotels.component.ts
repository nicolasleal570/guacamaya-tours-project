import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss']
})
export class AllHotelsComponent implements OnInit {

  hotels: Hotel[] = [];
  loading: boolean = false;

  constructor(private hService: AdminHotelService) {
  }

  ngOnInit() {
    this.getHotelsFromService();
  }

  deleteHotel($key) {
    this.hService.deleteHotel($key).then(() => {

      console.log('Object eliminado');
      this.hotels = [];

    }).finally(() => {

      this.getHotelsFromService();

    });
  }

  getHotelsFromService() {
    this.loading = true;
    this.hotels = [];
    this.hService.getHotels().subscribe((hotels) => {
      hotels.forEach(item => {
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

      this.loading = false;
    });
  }

}
