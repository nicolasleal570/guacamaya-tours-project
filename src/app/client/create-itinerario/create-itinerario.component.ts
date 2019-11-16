import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Destino } from 'src/app/models/destino';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';

@Component({
  selector: 'app-create-itinerario',
  templateUrl: './create-itinerario.component.html',
  styleUrls: ['./create-itinerario.component.scss']
})
export class CreateItinerarioComponent implements OnInit {

  formItinerario: FormGroup;
  hotels: Hotel[] = [
    {
      $key: 'tWR0yoivOHv81IWrfoLO',
      name: 'Hotel Hard Rock',
      imgPresentation: '',
      location: {
        latitud: '',
        longitud: '',
        direction: '',
      },
      services: [],
      activities: [],
      stateId: '123456IKGFD',
      stars: 4,
      gallery: [],
      fullDay: false,
    }
  ];
  selectedHotel: Hotel;
  rooms: Room[] = [];
  destinos: Destino[] = [];
  selectedRoom: Room;
  selectedDestino: Destino;
  numOfPersons: number;

  constructor(private fb: FormBuilder, private destinoSV: AdminDestinoService,
    private hotelService: AdminHotelService, private roomSV: AdminRoomsService) {
  }

  ngOnInit() {
    this.formItinerario = this.fb.group({
      destinoState: [''],
      destinoCategory: [''],
      destinoName: [''],
      checkin: [''],
      checkout: [''],
      hotel: [''],
      numberOfHabs: [''],
      habs: new FormArray([]),
    });


    this.destinoSV.getDestinos().subscribe(array => {
      this.destinos = array.map(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return destino;
      });
    });
  }

  get destinoStateGetter() {
    return this.formItinerario.get('destinoState');
  }

  // GETTER PARA LAS HABS DEL FORM
  get habsArray(): FormArray {
    return this.formItinerario.get('habs') as FormArray;
  }

  get hotel() {
    return this.formItinerario.get('hotel');
  }

  onChangeDestinoSelect(e) {
    const destinoKey = e.target.value || 0;

    this.selectedDestino = this.destinos.find(item => {
      return item.$key === destinoKey;
    });

    this.hotelService.getHotels().subscribe(array => {
      this.hotels = array.map(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        if (hotel.stateId === this.selectedDestino.stateId) {
          return hotel;
        }
      });
    });

  }

  // SE EJECUTA CUANDO EL SELECT DE HABITACIONES CAMBIA
  onChangeNumberHabs(e) {
    const numberOfHabs = e.target.value || 0;

    if (this.habsArray.length < numberOfHabs) {
      for (let i = this.habsArray.length; i < numberOfHabs; i++) {
        this.habsArray.push(this.fb.group({
          habType: [''],
          persons: this.fb.array([])
        }));
      }
    } else {
      for (let i = this.habsArray.length; i >= numberOfHabs; i--) {
        this.habsArray.removeAt(i);
      }
    }

  }

  // AGREGA EL NUMERO DE PERSONAS POR HABITACION
  addPersons(index) {
    const control = (<FormArray>this.formItinerario.controls['habs']).at(index).get('persons') as FormArray;
    control.push(this.fb.group({
      name: [''],
      lastName: [''],
    }));
  }

  resetPersonsForm(index: number){
    const control = (<FormArray>this.formItinerario.controls['habs']).at(index).get('persons') as FormArray;
    control.clear();
  }

  // SE EJECUTA CUANDO SE SELECCIONA UN HOTEL
  onHotelSelected(id) {
    this.selectedHotel = this.hotels.find((hotel: Hotel) => {
      return id === hotel.$key;
    });

    this.roomSV.getRooms().subscribe(array => {
      this.rooms = array.map(item => {
        const room: Room = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        if (room.hotelId === this.selectedHotel.$key) {
          return room;
        }
      });
    });

    
  }

  // SE EJECUTA CUANDO SE CAMBIA EL TIPO DE HABITACION
  onChangeHabType(e, indexPerson) {
    const roomKey = e.target.value || 0;

    this.selectedRoom = this.rooms.find((item: Room) => {
      return roomKey === item.$key;
    });
    
    console.log(this.selectedRoom);
    this.resetPersonsForm(indexPerson);
    if (this.selectedRoom) {
      // Agrega tantos inputs como personas haya
      for (let i = 0; i < this.selectedRoom.maxPersons; i++) {
        this.addPersons(indexPerson);
      }
    }

  }

  // SE EJECUTA CUANDO SE ENVIA EL FORM
  onSubmit() {
    console.log(this.formItinerario.value);
  }

}
