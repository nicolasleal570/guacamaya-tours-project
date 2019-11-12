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
  loading: boolean;

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
    });

    this.galleryForm.push(img);
  }

  deleteImage(i: number) {
    this.galleryForm.removeAt(i);
  }

  onSubmit() {
    
    const destino: Destino = {

      name: this.createDestinoForm.value.name,
      description: this.createDestinoForm.value.description,
      categoryId: this.createDestinoForm.value.categoryId,
      location: this.createDestinoForm.value.location,
      stateId: this.createDestinoForm.value.stateId,
      imgBanner: this.createDestinoForm.value.imgBanner,

    };

    console.log(destino);
    this.loading = true;

    this.destinoService.createDestino(destino).then( item => {
      console.log('DESTINO CREADO', item.id);
      this.loading = false;
      console.log(this.loading);
    })

  }


}
