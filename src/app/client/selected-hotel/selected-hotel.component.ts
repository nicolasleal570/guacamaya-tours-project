import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-selected-hotel',
  templateUrl: './selected-hotel.component.html',
  styleUrls: ['./selected-hotel.component.scss']
})
export class SelectedHotelComponent implements OnInit {

  hotel: Hotel;
  hotelId: string = '';
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
    });
  }
  
  ngOnInit() {
    this.loading = true;
    console.log(this.loading);

    this.hotelService.getHotelFromId(this.hotelId).then(doc => {
      this.hotel = doc;
    }).finally(() => {
      this.loading = false;
      console.log(this.loading);
    });
  }

}
