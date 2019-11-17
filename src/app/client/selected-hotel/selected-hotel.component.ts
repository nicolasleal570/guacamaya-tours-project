import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
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

  constructor(private route: ActivatedRoute, private hotelService: AdminHotelService) {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
    });
  }

  ngOnInit() {
    this.loading = true;

    this.hotelService.getHotelById(this.hotelId).subscribe(array => {

      this.hotel = {
        $key: array.payload.id,
        ...array.payload.data()
      } as Hotel;
      this.loading = false;

    });
  }

}
