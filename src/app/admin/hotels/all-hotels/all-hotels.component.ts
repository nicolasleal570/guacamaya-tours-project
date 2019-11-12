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

  deleteHotel($key: string) {
    this.hService.deleteHotel($key).then(() => {

      console.log('Object eliminado');
      // this.hotels = [];

    }).finally(() => {

      // this.getHotelsFromService();

    });
  }

  getHotelsFromService() {
    this.loading = true;
    this.hotels = [];
    this.hService.getHotels().subscribe((actionArray) => {
      this.hotels = actionArray.map(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return hotel;
      });

      this.loading = false;
    });
  }

}
