import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss']
})
export class AllHotelsComponent implements OnInit {

  hotels: Hotel[] = [];
  loading: boolean = false;
  deleting: boolean = false;

  constructor(private hService: AdminHotelService, private router: Router) {
  }

  ngOnInit() {
    this.getHotelsFromService();
  }

  deleteHotel($key: string) {
    this.deleting = true;
    this.hService.deleteHotel($key).then(() => {

      console.log('HOTEL ELIMINADO');

    }).catch((err) => {
      this.deleting = false;
      console.log(err);
    }).finally(() => {
      this.deleting = false;
    });
  }

  editButtonClick(hotelId: string){
    this.router.navigate(['/admin/hoteles', hotelId, 'editar']);
    console.log(hotelId);
  }

  getHotelsFromService() {
    this.loading = true;
    this.hotels = [];
    this.hService.getHotels().subscribe((actionArray) => {
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
