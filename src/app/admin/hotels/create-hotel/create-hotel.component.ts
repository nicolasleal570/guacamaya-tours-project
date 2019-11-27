import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Hotel } from 'src/app/models/hotel';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { State } from 'src/app/models/state';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss']
})
export class CreateHotelComponent implements OnInit {

  createHotelForm: FormGroup;
  loading: boolean = false;
  statesLoading: boolean = false;
  destinosLoading: boolean = false;
  states: State[] = [];
  editarHotel: Hotel = null;
  destinos: Destino[] = [];

  editHotel: Hotel = null;

  constructor(private fb: FormBuilder, private hotelservice: AdminHotelService, private router: Router,
    private statesService: AdminStatesService, private destinoservice: AdminDestinoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createHotelForm = this.fb.group({
      name: [''],
      stars: [''],
      destinoId: [''],
      latitud: [''],
      longitud: [''],
      direction: [''],
      fullDay: [''],
      stateId: [''],
      imgBanner: [''],
      imgGallery: this.fb.array([]),
      services: this.fb.array([]),
      activities: this.fb.array([]),
    });

    this.loading = false;

    this.getAllStates();
    this.getAllDestinos();

    this.route.paramMap.subscribe(params => {
      const id = params.get('hotelId');
      this.selectHotelToEdit(id);
    });
  }

  selectHotelToEdit(hotelId: string){
    this.hotelservice.getHotelById(hotelId).subscribe(array=>{
      const hotel: Hotel = {
        $key: array.payload.id,
        ...array.payload.data()
      }

      this.editHotel = hotel;
      this.editSelectedHotel(hotel);
    });
  }

  editSelectedHotel(hotel: Hotel){
    this.createHotelForm.patchValue({
      name: hotel.name,
      stars: hotel.stars,
      destinoId: hotel.destinoId,
      latitud: hotel.location.latitud,
      longitud: hotel.location.longitud,
      direction: hotel.location.direction,
      fullDay: hotel.fullDay,
      stateId: hotel.stateId,
      imgBanner: hotel.imgPresentation,
    });
    this.createHotelForm.setControl('imgGallery', this.existingGalleryImages(hotel.gallery));
    this.createHotelForm.setControl('services', this.existingGalleryImages(hotel.services));
    this.createHotelForm.setControl('activities', this.existingGalleryImages(hotel.activities));
  }

  existingGalleryImages(images: any[]): FormArray{
    const formArray = this.fb.array([]);

    images.forEach(item => {
      formArray.push(this.fb.group({
        path: item.path
      }));
    });

    return formArray;
  }

  existingServices(services: any[]): FormArray{
    const formArray = this.fb.array([]);

    services.forEach(item => {
      formArray.push(this.fb.group({
        path: item.path
      }));
    });

    return formArray;
  }

  existingActivities(activities: any[]): FormArray{
    const formArray = this.fb.array([]);

    activities.forEach(item => {
      formArray.push(this.fb.group({
        path: item.path
      }));
    });

    return formArray;
  }

  getAllDestinos() {
    this.destinosLoading = true;
    this.destinoservice.getDestinos().subscribe(array => {
      this.destinos = array.map(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return destino;
      });

      this.destinosLoading = false;

    });
  }

  getAllStates() {
    this.statesLoading = true;
    this.statesService.getStates().subscribe(array => {
      this.states = array.map(item => {
        const state: State = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return state;
      });
      
      this.statesLoading = false;

    });
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

  onSubmit() {

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
      destinoId: this.createHotelForm.value.destinoId
    };

    console.log(hotel);
    this.loading = true;

    if (this.editHotel) {
      this.hotelservice.updateHotel(hotel, this.editHotel.$key).then( ()=> {
  
        console.log('Editado!', hotel.$key);
        this.loading = false;
  
      }).catch(err => {
  
        console.log(err);
        this.loading = false;
  
      }).finally(() => {
  
        this.router.navigate(['/admin/hoteles']);
  
      });
    } else {
      this.hotelservice.createHotel(hotel).then(item => {
  
        console.log('Hecho!', item.id);
        this.loading = false;
        console.log(this.loading);
  
      }).catch(err => {
  
        console.log(err);
        this.loading = false;
  
      }).finally(() => {
  
        this.router.navigate(['/admin/hoteles']);
  
      });
    }

  }


}
