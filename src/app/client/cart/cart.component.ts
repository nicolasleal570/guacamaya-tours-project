import { Component, OnInit } from '@angular/core';
import { Itinerario } from 'src/app/models/itinerario';
import { Destino } from 'src/app/models/destino';
import { Hotel } from 'src/app/models/hotel';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Room } from 'src/app/models/room';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { SelectedRoom } from 'src/app/models/SelectedRoom';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  reservaciones: Itinerario[] = [];
  destinos: Destino[] = [];
  hoteles: Hotel[] = [];
  habitaciones: Room[] = [];
  total: number = 0;

  destLoading: boolean = false;
  hotelsLoading: boolean = false;
  roomsLoading: boolean = false;
  
  constructor(private hotelSV: AdminHotelService, private destinoSV: AdminDestinoService, private roomSV: AdminRoomsService) { 

  }

  ngOnInit() {

    this.total = 0;
    this.reservaciones = [];
    this.hoteles = [];
    this.destinos = [];
    this.habitaciones = [];

    if (localStorage.getItem('cart') !== null) {
      this.reservaciones = JSON.parse(localStorage.getItem('cart')) as Itinerario[];
    }

    this.reservaciones.forEach((item: Itinerario, index)=>{

      this.total = this.total + item.totalPrice;

      this.getHotelsFromService(item);
      this.getDestinosFromService(item);
      this.getRoomsFromService(item, index);

    });

  }

  getHotelsFromService(item: Itinerario){
    this.hotelsLoading = true;
    this.hotelSV.getHotelById(item.hotelId).subscribe(item => {
      const hotel: Hotel = {
        $key: item.payload.id,
        ...item.payload.data()
      }

      this.hoteles.push(hotel);
      this.hotelsLoading = false;
    });
  }

  getDestinosFromService(item: Itinerario){
    this.destLoading = true;
    this.destinoSV.getDestinoById(item.destinoId).subscribe(item => {
      const destino: Destino = {
        $key: item.payload.id,
        ...item.payload.data()
      }

      this.destinos.push(destino);
      this.destLoading = false;
    });
  }

  getRoomsFromService(item: Itinerario, index){
    this.roomsLoading = true;
    this.roomSV.getRoomById(item.habs[index].habType).subscribe(hab => {
      const habi: Room = {
        $key: hab.payload.id,
        ...hab.payload.data()
      }

      this.habitaciones.push(habi);
      this.roomsLoading = false;
    });
  }

  getDestinoName(index: number): string {
    return this.destinos[index].name;
  }

  getHotelName(index: number): string {
    return this.hoteles[index].name;
  }

  getHabitaciones(reservacion: Itinerario) {
   reservacion.habs.forEach((item) => {
     this.roomSV.getRoomById(item.habType).subscribe(obj => {
       const hab: Room = {
         $key: obj.payload.id,
         ...obj.payload.data()
       }

       this.habitaciones.push(hab);
     });
   });
  }
 
  eliminarReserva(currentItem: string, index: number) {
    // delete this.reservaciones[currentItem];
    // localStorage.removeItem(currentItem);
    // location.reload();
  }

}
