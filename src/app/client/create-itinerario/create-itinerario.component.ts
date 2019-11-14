import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';
import { HotelService } from 'src/app/services/hotel.service';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-create-itinerario',
  templateUrl: './create-itinerario.component.html',
  styleUrls: ['./create-itinerario.component.scss']
})
export class CreateItinerarioComponent implements OnInit {

  formItinerario: FormGroup;
  hotels: Hotel[] = [
    {
      $key: '1234TFCV',
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
      rooms: [
        {
          $key: '0987UJHGFD',
          habName: 'Doble',
          imgPresentation: 'url',
          maxPersons: 2,
          adventajes: [],
          pricePerNight: '2',
        },
        {
          $key: '1XVB958HCBN',
          habName: 'Familiar',
          imgPresentation: 'url',
          maxPersons: 4,
          adventajes: [],
          pricePerNight: '7',
        }
      ]
    }
  ];
  selectedHotel: Hotel;
  selectedDestino: string = null;
  numOfPersons: number;

  constructor(private fb: FormBuilder, private hotelService: HotelService) {
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


    this.hotelService.getHotels.subscribe((hotels) => {
      hotels.forEach(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.hotels.push(hotel);
      });
    });
  }

  get destinoStateGetter(){
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
    this.selectedDestino = e.target.value || 0;
  }

  // SE EJECUTA CUANDO EL SELECT DE HABITACIONES CAMBIA
  onChangeHabs(e) {
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

  // SE EJECUTA CUANDO SE CAMBIA EL TIPO DE HABITACION
  onChangeHabType(e, indexPerson) {
    const roomSelected = this.selectedHotel.rooms.find((room: Room) => {
      return room.$key === e.target.value;
    });

    for (let i = 0; i < roomSelected.maxPersons; i++) {
      this.addPersons(indexPerson);
    }

  }

  // SE EJECUTA CUANDO SE SELECCIONA UN HOTEL
  onHotelClick(id) {
    this.selectedHotel = this.hotels.find((hotel: Hotel) => {
      return id === hotel.$key;
    });
  }

  // SE EJECUTA CUANDO SE ENVIA EL FORM
  onSubmit() {
    console.log(this.formItinerario.value);
  }

}
