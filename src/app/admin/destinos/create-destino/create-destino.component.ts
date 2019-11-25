import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { State } from 'src/app/models/state';
import { Category } from 'src/app/models/category';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-destino',
  templateUrl: './create-destino.component.html',
  styleUrls: ['./create-destino.component.scss']
})
export class CreateDestinoComponent implements OnInit {

  createDestinoForm: FormGroup;
  loading: boolean = false;
  states: State[];
  categories: Category[];
  editarDestino: Destino = null;

  constructor(private fb: FormBuilder, private destinoService: AdminDestinoService, private stateSV: AdminStatesService, private router: Router, private categoryS: AdminCategoryService, private route: ActivatedRoute) { }

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
    this.getAllCategories();

    this.route.paramMap.subscribe(params => {
      const destinoId = params.get('idDestinos');
      if (destinoId) {
        this.getDestino(destinoId);
      }
    });

  }

  getDestino(id: string) {
    this.destinoService.getDestinoById(id).subscribe(destino => {
      const destination: Destino = {
        $key: destino.payload.id,
        name: destino.payload.get('name'),
        description: destino.payload.get('description'),
        categoryId: destino.payload.get('categoryId'),
        location: {
          latitud: destino.payload.get('location.latitud'),
          longitud: destino.payload.get('location.longitud'),
          direction: destino.payload.get('location.direction')
        },
        stateId: destino.payload.get('stateId'),
        imgBanner: destino.payload.get('imgBanner'),
        imgGallery: destino.payload.get('imgGallery'),
      };
      this.editDestino(destination);
    }, err => console.log(err));
  }

  editDestino(destino: Destino) {
    this.editarDestino = destino;
    console.log(destino);

    // SE LLENAN LOS CAMPOS NORMALES
    this.createDestinoForm.patchValue({
      name: destino.name,
      description: destino.description,
      category: destino.categoryId,
      latitud: destino.location.latitud,
      longitud: destino.location.longitud,
      direction: destino.location.direction,
      state: destino.stateId,
      imgBanner: destino.imgBanner,
    });

    // SE LLENAN LOS CAMPOS QUE SON UN FORM ARRAY
    this.createDestinoForm.setControl('imgGallery', this.setExistingImgGalleryPhotos(destino.imgGallery));
  }

  setExistingImgGalleryPhotos(imgGallery: any[]): FormArray{
    const formArray = this.fb.array([]);

    imgGallery.forEach(elem => {
      formArray.push(this.fb.group({
        path: elem.path
      }));
    });

    return formArray;
  }

  getAllStates() {
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

  getAllCategories() {
    this.categoryS.getCategorys().subscribe(array => {
      this.categories = array.map(item => {
        const category: Category = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return category;

      })
    })
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
      imgGallery: this.createDestinoForm.value.imgGallery,
    };

    this.loading = true;

    if (this.editarDestino) { // Se está editando

      this.destinoService.updateDestino(destino, this.editarDestino.$key).then(() => {
        console.log('Editado!', this.editarDestino.$key);
      }).catch(err => {
        console.log(err);
        this.loading = false;

      }).finally(() => {
        this.router.navigate(['/admin/destinos']);
        this.loading = false;
      });

    } else {

      this.destinoService.createDestino(destino).then(item => {
        console.log('Creado!', item.id);
      }).catch(err => {
        console.log(err);
        this.loading = false;

      }).finally(() => {
        this.router.navigate(['/admin/destinos']);
        this.loading = false;
      });

    }

  }


}
