import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Destino } from 'src/app/models/destino';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Itinerario } from 'src/app/models/itinerario';


@Component({
  selector: 'app-create-itinerario',
  templateUrl: './create-itinerario.component.html',
  styleUrls: ['./create-itinerario.component.scss']
})
export class CreateItinerarioComponent implements OnInit {

  formItinerario: FormGroup;
  hotels: Hotel[] = [];
  selectedHotel: Hotel;
  rooms: Room[] = [];
  destinos: Destino[] = [];
  selectedRoom: Room;
  selectedDestino: Destino;
  numberOfHabs: number = 0;
  numberOfDays: number = 0;
  destinosLoading: boolean = false;
  hotelsLoading: boolean = false;
  habsLoading: boolean = false;

  constructor(private fb: FormBuilder, private destinoSV: AdminDestinoService,
    private hotelService: AdminHotelService, private roomSV: AdminRoomsService) {
  }

  ngOnInit() {
    this.formItinerario = this.fb.group({
      destinoStateId: [''],
      destinoCategoryId: [''],
      destinoId: [''],
      checkIn: [''],
      checkOut: [''],
      hotelId: [''],
      numberOfHabs: [''],
      numberOfDays: [''],
      habs: new FormArray([]),
    });


    this.getDestinosFromService();
  }

  getDestinosFromService() {
    this.destinosLoading = true;
    this.destinos = [];
    this.destinoSV.getDestinos().subscribe((actionArray) => {
      this.destinos = actionArray.map(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return destino;

      });

      this.destinosLoading = false;

    });
  }

  getHotelsFromService() {
    this.hotelsLoading = true;
    this.hotels = [];
    this.rooms = [];
    if (this.selectedDestino) {
      this.hotelService.getHotelsInDestino(this.selectedDestino.$key).then(array => {
        array.forEach(item => {
          const hotel: Hotel = {
            $key: item.id,
            name: item.get('name'),
            stars: item.get('stars'),
            location: item.get('location'),
            stateId: item.get('stateId'),
            destinoId: item.get('destinoId'),
            imgPresentation: item.get('imgPresentation'),
            gallery: item.get('gallery'),
            fullDay: item.get('fullDay'),
            services: item.get('services'),
            activities: item.get('activities'),
          }

          this.hotels.push(hotel);
        });
        this.hotelsLoading = false;
      });
    }
  }

  getHabsInSelectedHotel() {
    if (this.selectedHotel) {
      this.habsLoading = true;
      this.rooms = [];
      this.roomSV.getRoomFromHotel(this.selectedHotel.$key).then(array => {
        array.forEach(item => {
          const hab: Room = {
            $key: item.id,
            name: item.get('name'),
            description: item.get('description'),
            imgPresentation: item.get('imgPresentation'),
            maxPersons: item.get('maxPersons'),
            adventajes: item.get('adventajes'),
            gallery: item.get('gallery'),
            pricePerNight: item.get('pricePerNight'),
            hotelId: item.get('hotelId'),
            available: item.get('available')
          }

          this.rooms.push(hab);
        });
      }).finally(() => {
        this.habsLoading = false;
      });
    }
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

    this.selectedHotel = null;
    this.numberOfHabs = 0;

    this.selectedDestino = this.destinos.find(item => {
      return item.$key === destinoKey;
    });

    this.getHotelsFromService();

  }

  // SE EJECUTA CUANDO EL SELECT DE HABITACIONES CAMBIA
  onChangeNumberHabs(e = null) {
    this.numberOfHabs = 0;
    if (e) {
      this.numberOfHabs = e.target.value;
    }

    if (this.habsArray.length < this.numberOfHabs) {
      for (let i = this.habsArray.length; i < this.numberOfHabs; i++) {
        this.habsArray.push(this.fb.group({
          habType: [''],
          persons: this.fb.array([])
        }));
      }
    } else {
      for (let i = this.habsArray.length; i >= this.numberOfHabs; i--) {
        this.habsArray.removeAt(i);
      }
    }

    this.getHabsInSelectedHotel();

  }

  // AGREGA EL NUMERO DE PERSONAS POR HABITACION
  addPersons(index) {
    const control = (<FormArray>this.formItinerario.controls['habs']).at(index).get('persons') as FormArray;
    control.push(this.fb.group({
      name: [''],
      lastName: [''],
    }));
  }

  resetPersonsForm(index: number) {
    const control = (<FormArray>this.formItinerario.controls['habs']).at(index).get('persons') as FormArray;
    control.clear();
  }

  // SE EJECUTA CUANDO SE SELECCIONA UN HOTEL
  onHotelSelected(id) {
    this.selectedHotel = this.hotels.find((hotel: Hotel) => {
      return id === hotel.$key;
    });

    this.rooms = [];
    this.onChangeNumberHabs();
    this.formItinerario.patchValue({
      'numberOfHabs': '',
      'numberOfDays': '',
    });

    this.getHabsInSelectedHotel();

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
    let array = [];

    const itinerario: Itinerario = this.formItinerario.value as Itinerario;

    itinerario.totalPrice = itinerario.numberOfDays*this.selectedRoom.pricePerNight*itinerario.numberOfHabs;
    itinerario.destino = this.selectedDestino;
    itinerario.hotel = this.selectedHotel;

    if (localStorage.getItem('cart') !== null) {
      array = JSON.parse(localStorage.getItem('cart'));
    }
    array.push(itinerario);

    localStorage.setItem('cart', JSON.stringify(array));
    this.resetForm();
  }

  resetForm() {
    this.selectedDestino = null;
    this.selectedHotel = null;
    this.selectedRoom = null;
    this.hotels = [];
    this.rooms = [];
    this.numberOfHabs = 0;
    this.numberOfDays = 0;

    this.formItinerario.patchValue({
      destinoStateId: '',
      destinoCategoryId: '',
      destinoId: '',
    });

  }

}
