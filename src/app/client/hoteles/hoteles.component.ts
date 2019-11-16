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

  constructor(private hotelService: AdminHotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(actionArray => {
      this.hotels = actionArray.map(item => {
        return {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Hotel;
      });
    });
  }

}
