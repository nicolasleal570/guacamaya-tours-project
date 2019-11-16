import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Router } from '@angular/router';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  createRoomForm: FormGroup;
  hotels: Hotel[] = [];
  loading: boolean = false;
  hotelsLoading: boolean = false;

  constructor(private fb: FormBuilder, private hotelService: AdminHotelService, private router: Router, private habService: AdminRoomsService) { }

  ngOnInit() {
    this.createRoomFormGroup();
    this.getAllHotels();
  }

  createRoomFormGroup(){
    this.createRoomForm = this.fb.group({
      name: [''],
      description: [''],
      imgPresentation: [''],
      maxPersons: [''],
      pricePerNight: [''],
      hotelId: [''],
      gallery: this.fb.array([]),
      adventajes: this.fb.array([]),
    });
  }

  getAllHotels(){
    this.hotelsLoading = true;
    this.hotelService.getHotels().subscribe(array => {
      this.hotels = array.map(item => {
        const hotel:Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return hotel;
      });
      
      this.hotelsLoading = false;
    });
  }

  get getGalleryForm(): FormArray{
    return this.createRoomForm.get('gallery') as FormArray;
  }

  get getAdventajeForm(): FormArray{
    return this.createRoomForm.get('adventajes') as FormArray;
  }

  addImage() {
    const img = this.fb.group({
      path: [],
    });

    this.getGalleryForm.push(img);
  }

  deleteImage(i: number) {
    this.getGalleryForm.removeAt(i);
  }

  addAdventaje() {
    const img = this.fb.group({
      path: [],
    });

    this.getAdventajeForm.push(img);
  }

  deleteAdventaje(i: number) {
    this.getAdventajeForm.removeAt(i);
  }

  onSubmit(){

    this.loading = true;

    const room: Room = {
      ...this.createRoomForm.value
    }

    this.habService.createRoom(room).then(item => {

      console.log('Hecho!', item.id);
      this.loading = false;
      console.log(this.loading);

    }).catch(err => {

      console.log(err);
      this.loading = false;

    }).finally(() => {

      this.router.navigate(['/admin/habitaciones']);

    });

  }

}
