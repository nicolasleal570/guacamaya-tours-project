import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { Hotel } from 'src/app/models/hotel';
import { Category } from 'src/app/models/category';
import { State } from 'src/app/models/state';
import { Room } from 'src/app/models/room';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { AdminStatesService } from 'src/app/services/admin-states.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  destinos: Destino[] = [];
  hoteles: Hotel[] = [];
  habitaciones: Room[] = [];
  categories: Category[] = [];
  estados: State[] = [];

  destLoading: boolean = false;
  hotelLoading: boolean = false;
  habsLoading: boolean = false;
  catLoading: boolean = false;
  stateLoading: boolean = false;

  constructor(private destSV: AdminDestinoService, private hotelSV: AdminHotelService,
    private habsSV: AdminRoomsService, private catSV: AdminCategoryService, private stateSV: AdminStatesService) { }

  ngOnInit() {
    this.getHoteles();
    this.getDestinos();
    this.getHabs();
    this.getStates();
    this.getCategories();
  }

  getDestinos() {
    this.destLoading = true;
    this.destinos = [];
    this.destSV.getDestinos().subscribe((actionArray) => {
      this.destinos = actionArray.map(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.destLoading = false;
        return destino;
      });
    });
  }

  getHoteles() {
    this.hotelLoading = true;
    this.hoteles = [];
    this.hotelSV.getHotels().subscribe((actionArray) => {
      this.hoteles = actionArray.map(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return hotel;
      });

      this.hotelLoading = false;
    });
  }

  getHabs() {
    this.habsLoading = true;
    this.habitaciones = [];
    this.habsSV.getRooms().subscribe(array => {
      this.habitaciones = array.map(item => {
        const room: Room = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return room;
      });

      this.habsLoading = false;
    });
  }

  getStates() {
    this.stateLoading = true;
    this.estados = [];
    this.stateSV.getStates().subscribe((actionArray) => {
      this.estados = actionArray.map(item => {
        const state: State = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return state;
      });


      this.stateLoading = false;

    });
  }

  getCategories(){
    this.catLoading = true;
    this.catSV.getCategorys().subscribe(arr => {
      this.categories = arr.map(x => {
        const cat: Category = {
          $key: x.payload.doc.id,
          ...x.payload.doc.data()
        }

        return cat;
      });
      this.catLoading = false;
    });
  }


}
