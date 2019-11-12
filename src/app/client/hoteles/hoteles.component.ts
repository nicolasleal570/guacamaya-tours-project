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
    this.hotelService.getHotels.subscribe(actionArray => {
      this.hotels = actionArray.map(item => {
        return {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Hotel;
      });
    });
  }

}
