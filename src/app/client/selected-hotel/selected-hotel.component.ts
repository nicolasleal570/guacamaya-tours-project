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

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('hotelId'));
      
      this.hotel = this.hotelService.getHotelFromId(params.get('hotelId'));
    });
  }

  ngOnInit() {
  }

}
