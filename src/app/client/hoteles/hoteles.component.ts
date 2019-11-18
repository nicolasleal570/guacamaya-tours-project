import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {

  hotels: Hotel[] = [];
  loading: boolean = false;

  constructor(private hotelService: AdminHotelService) { }

  ngOnInit() {
    this.getHotelsFromService();
  }

  getHotelsFromService() {
    this.loading = true;
    this.hotels = [];
    this.hotelService.getHotels().subscribe((actionArray) => {
      this.hotels = actionArray.map(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return hotel;
      });

      this.loading = false;
    });
  }

}
