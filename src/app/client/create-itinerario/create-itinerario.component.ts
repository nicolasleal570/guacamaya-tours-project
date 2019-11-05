import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-create-itinerario',
  templateUrl: './create-itinerario.component.html',
  styleUrls: ['./create-itinerario.component.scss']
})
export class CreateItinerarioComponent implements OnInit {

  formItinerario: FormGroup;

  hotels: Hotel[];
  selectedHotel: Hotel;
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

    this.hotelService.getHotels.subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  // GETTER PARA LAS HABS DEL FORM
  get habs(): FormArray{
    return this.formItinerario.get('habs') as FormArray;
  }

  get hotel(){
    return this.formItinerario.get('hotel');
  }

  // SE EJECUTA CUANDO EL SELECT DE HABITACIONES CAMBIA
  onChangeHabs(e){
    const numberOfHabs = e.target.value || 0;

    if (this.habs.length < numberOfHabs) {
      for (let i = this.habs.length; i < numberOfHabs; i++) {
        this.habs.push(this.fb.group({
          habType: [''],
        }));
      }
    } else {
      for (let i = this.habs.length; i >= numberOfHabs; i--) {
        this.habs.removeAt(i);
      }
    }

  }

  // SE EJECUTA CUANDO SE CAMBIA EL TIPO DE HABITACION
  onChangeHabType(e, index){
    const room = this.selectedHotel.rooms.find((room: Room) => {
      return room.$key === e.target.value;
    });
  }

  // SE EJECUTA CUANDO SE SELECCIONA UN HOTEL
  onHotelClick(id){
    this.selectedHotel = this.hotelService.getHotelById(id);
  }

  // SE EJECUTA CUANDO SE ENVIA EL FORM
  onSubmit(){
    alert(JSON.stringify(this.formItinerario.value, null, 4));
  }

}
