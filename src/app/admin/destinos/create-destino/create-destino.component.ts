import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-destino',
  templateUrl: './create-destino.component.html',
  styleUrls: ['./create-destino.component.scss']
})
export class CreateDestinoComponent implements OnInit {

  createHotelForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createHotelForm = this.fb.group({
      name: [''],
      description: [''],
      latitud: [''],
      longitud: [''],
      direccion: [''],
      fullDay: [''],
      state: [''],
      imgBanner: [''],
      imgGallery: this.fb.array([]),
    });
  }

  get galleryForm(): FormArray {
    return this.createHotelForm.get('imgGallery') as FormArray;
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

  onSubmit() {
    console.log(this.createHotelForm.value);
  }


}
