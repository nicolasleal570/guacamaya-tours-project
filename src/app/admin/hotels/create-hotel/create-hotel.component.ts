import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss']
})
export class CreateHotelComponent implements OnInit {

  createHotelForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createHotelForm = this.fb.group({
      name: [''],
      stars: [''],
      latitud: [''],
      longitud: [''],
      direccion: [''],
      fullDay: [''],
      state: [''],
      imgBanner: [''],
      habs: this.fb.array([]),
      imgGallery: this.fb.array([]),
    });
  }

  get habsForm(): FormArray {
    return this.createHotelForm.get('habs') as FormArray;
  }

  get galleryForm(): FormArray {
    return this.createHotelForm.get('imgGallery') as FormArray;
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

  onSubmit(){
    console.log(this.createHotelForm.value);
  }


}
