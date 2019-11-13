import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';

@Component({
  selector: 'app-create-destino',
  templateUrl: './create-destino.component.html',
  styleUrls: ['./create-destino.component.scss']
})
export class CreateDestinoComponent implements OnInit {

  createDestinoForm: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private destinoService: AdminDestinoService) { }

  ngOnInit() {
    this.createDestinoForm = this.fb.group({
      name: [''],
      description: [''],
      latitud: [''],
      longitud: [''],
      direccion: [''],
      fullDay: [''],
      state: [''],
      category: [''],
      imgBanner: [''],
      imgGallery: this.fb.array([]),
    });

    this.loading = false;

  }

  get galleryForm(): FormArray {
    return this.createDestinoForm.get('imgGallery') as FormArray;
  }

  addImage() {
    const img = this.fb.group({
      path: [],
      Ys: this.fb.array([
        this.initY()
      ])
    });

    this.galleryForm.push(img);
  }

  initY(){
    return this.fb.group({
      Y1: [''],
      Y2: [''],
    });
  }

  addY(index){
    const control = (<FormArray>this.createHotelForm.controls['imgGallery']).at(index).get('Ys') as FormArray;
    control.push(this.initY());
  }

  deleteImage(i: number) {
    this.galleryForm.removeAt(i);
  }

  onSubmit() {
    
    const destino: Destino = {

      name: this.createDestinoForm.value.name,
      description: this.createDestinoForm.value.description,
      categoryId: this.createDestinoForm.value.category,
      location: {
        latitud: this.createDestinoForm.value.latitud,
        longitud: this.createDestinoForm.value.longitud,
        direction: this.createDestinoForm.value.direccion
      },
      stateId: this.createDestinoForm.value.state,
      imgBanner: this.createDestinoForm.value.imgBanner,

    };

    this.loading = true;

    this.destinoService.createDestino(destino).then( item => {
      this.loading = false;
    });

  }


}
