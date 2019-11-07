import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss']
})
export class CreateHotelComponent implements OnInit {

  createHotelForm: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private hotelservice: AdminHotelService) { }

  ngOnInit() {
    this.createHotelForm = this.fb.group({
      name: [''],
      stars: [''],
      latitud: [''],
      longitud: [''],
      direction: [''],
      fullDay: [''],
      stateId: [''],
      imgBanner: [''],
      habs: this.fb.array([]),
      imgGallery: this.fb.array([]),
      services: this.fb.array([]),
      activities: this.fb.array([]),
    });

    this.loading = false;
  }

  get habsForm(): FormArray {
    return this.createHotelForm.get('habs') as FormArray;
  }

  get galleryForm(): FormArray {
    return this.createHotelForm.get('imgGallery') as FormArray;
  }

  get serviceForm(): FormArray {
    return this.createHotelForm.get('services') as FormArray;
  }

  get activityForm(): FormArray {
    return this.createHotelForm.get('activities') as FormArray;
  }

  addRoom() {
    const hab = this.fb.group({
      habName: [],
      pricePerNight: [''],
      maxPersons: [],
    });

    this.habsForm.push(hab);
  }

  deleteRoom(i: number) {
    this.habsForm.removeAt(i);
  }

  addImage() {
    const img = this.fb.group({
      path: [],
    });

    this.galleryForm.push(img);
  }

  deleteImage(i: number) {
    this.galleryForm.removeAt(i);
  }

  addService() {
    const service = this.fb.group({
      path: [''],
    });

    this.serviceForm.push(service);
  }

  deleteService(i: number) {
    this.serviceForm.removeAt(i);
  }
  addActivity() {
    const activity = this.fb.group({
      path: [],
    });

    this.activityForm.push(activity);
  }

  deleteActivity(i: number) {
    this.activityForm.removeAt(i);
  }

  onSubmit(){

    const hotel: Hotel = {
      name: this.createHotelForm.value.name,
      stars: this.createHotelForm.value.stars,
      location: {
        latitud: this.createHotelForm.value.latitud,
        longitud: this.createHotelForm.value.longitud,
        direction: this.createHotelForm.value.direction,
      },
      stateId: this.createHotelForm.value.stateId,
      imgPresentation: this.createHotelForm.value.imgBanner,
      gallery: this.createHotelForm.value.imgGallery,
      fullDay: this.createHotelForm.value.fullDay ? true : false,
      services: this.createHotelForm.value.services,
      activities: this.createHotelForm.value.activities,
      rooms: this.createHotelForm.value.habs
    };

    console.log(hotel);
    this.loading = true;

    this.hotelservice.createHotel(hotel).then(item => {
      console.log('Hecho!', item.id);
      this.loading = false;
      console.log(this.loading);
    });
  }


}
