import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Router } from '@angular/router';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-create-destino',
  templateUrl: './create-destino.component.html',
  styleUrls: ['./create-destino.component.scss']
})
export class CreateDestinoComponent implements OnInit {

  createDestinoForm: FormGroup;
  loading: boolean = false;
  states: State[];

  constructor(private fb: FormBuilder, private destinoService: AdminDestinoService, private stateSV: AdminStatesService, private router: Router) { }

  ngOnInit() {
    this.createDestinoForm = this.fb.group({
      name: [''],
      description: [''],
      latitud: [''],
      longitud: [''],
      direction: [''],
      fullDay: [''],
      state: [''],
      category: [''],
      imgBanner: [''],
      imgGallery: this.fb.array([]),
    });

    this.loading = false;

    this.getAllStates();

  }

  getAllStates(){
    this.stateSV.getStates().subscribe(array => {
      this.states = array.map(item => {
        const estado: State = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return estado;
      });
    });
  }

  get galleryForm(): FormArray {
    return this.createDestinoForm.get('imgGallery') as FormArray;
  }

  addImage() {
    const img = this.fb.group({
      path: []
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
      categoryId: this.createDestinoForm.value.category,
      location: {
        latitud: this.createDestinoForm.value.latitud,
        longitud: this.createDestinoForm.value.longitud,
        direction: this.createDestinoForm.value.direction
      },
      stateId: this.createDestinoForm.value.state,
      imgBanner: this.createDestinoForm.value.imgBanner,

    };

    this.loading = true;

    this.destinoService.createDestino(destino).then( item => {
      this.loading = false;
    }).catch(err => {
      console.log(err);
      this.loading=false;
      
    }).finally(() => {
      this.router.navigate(['/admin/destinos']);
    });

  }


}
