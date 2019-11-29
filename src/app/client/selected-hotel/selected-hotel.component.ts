import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-hotel',
  templateUrl: './selected-hotel.component.html',
  styleUrls: ['./selected-hotel.component.scss']
})
export class SelectedHotelComponent implements OnInit {

  lat = 40.730610;
  lng = -73.935242;

  hotel: Hotel;
  hotelId: string = '';
  loading: boolean = false;
  habs: Room[] = [];
  galeria: string[] = [];
  actividades: string[] = [];
  servicios: string[] = [];

  constructor(private route: ActivatedRoute, private hotelService: AdminHotelService, private roomService: AdminRoomsService, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
    });
  }

  ngOnInit() {

    this.loading = true;

    this.roomService.getRoomFromHotel(this.hotelId).then(array => {
      array.forEach(item => {
        const room: Room = {
          $key: item.id,
          name: item.get('name'),
          description: item.get('description'),
          imgPresentation: item.get('imgPresentation'),
          maxPersons: item.get('maxPersons'),
          adventajes: item.get('adventajes'),
          gallery: item.get('gallery'),
          pricePerNight: item.get('pricePerNight'),
          hotelId: item.get('hotelId'),
          available: item.get('available'),
        }

        this.habs.push(room);
      });
    });

    this.hotelService.getHotelById(this.hotelId).subscribe(array => {

      this.hotel = {
        $key: array.payload.id,
        ...array.payload.data()
      } as Hotel;
      this.loading = false;
      this.galeria = this.hotel.gallery;
      this.actividades = this.hotel.activities;
      this.servicios = this.hotel.services;

    });

  }

  editButtonClick(id: string){
    this.router.navigate(['/itinerario', id, 'hotel']);
  }

}
