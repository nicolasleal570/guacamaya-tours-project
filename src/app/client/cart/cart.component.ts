import { Component, OnInit } from '@angular/core';
import { Itinerario } from 'src/app/models/itinerario';
import { Destino } from 'src/app/models/destino';
import { Hotel } from 'src/app/models/hotel';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Room } from 'src/app/models/room';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { SelectedRoom } from 'src/app/models/SelectedRoom';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;

  reservaciones: Itinerario[] = [];
  destinos: Destino[] = [];
  hoteles: Hotel[] = [];
  habitaciones: Room[] = [];
  total: number = 0;
  numReservaciones: number = -1;

  destLoading: boolean = false;
  hotelsLoading: boolean = false;
  roomsLoading: boolean = false;
  showSuccess: boolean = false;

  showCancel: boolean = false;
  showError: boolean = false;

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

    this.reservaciones.forEach((item: Itinerario, index) => {
      this.numReservaciones = this.numReservaciones + 1;
      this.total = this.total + item.totalPrice;

      this.getHotelsFromService(item);
      this.getDestinosFromService(item);
      this.getRoomsFromService(item, index);


    });

    this.initConfig();

  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: this.total.toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.total.toString()
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: this.total.toString(),
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.showCancel = true;

      },
      onError: err => {
        console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    }
  }

  getHotelsFromService(item: Itinerario) {
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

  getDestinosFromService(item: Itinerario) {
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

  getRoomsFromService(item: Itinerario, index) {
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

  eliminarReserva(index: number) {
    this.total = this.total - this.reservaciones[index].totalPrice;
    this.reservaciones[index] = null;
    for (let i = index; i < this.numReservaciones; i++) {
      this.reservaciones[index] = this.reservaciones[index + 1]
    }
    this.reservaciones.splice(this.numReservaciones, 1);
    this.numReservaciones = this.numReservaciones - 1;
    localStorage.clear;
    localStorage.setItem('cart', JSON.stringify(this.reservaciones));
    console.log(this.total);
    window.location.reload();
  }

}
