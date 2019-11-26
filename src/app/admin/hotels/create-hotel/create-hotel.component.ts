import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Hotel } from 'src/app/models/hotel';
import { Router } from '@angular/router';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { State } from 'src/app/models/state';
import { ActivatedRoute} from '@angular/router';
import { HeaderComponent } from 'src/app/client/partials/header/header.component';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss']
})
export class CreateHotelComponent implements OnInit {

  createHotelForm: FormGroup;
  loading: boolean = false;
  statesLoading: boolean = false;
  states: State[] = [];
  editarHotel: Hotel = null;

  constructor(private fb: FormBuilder, private hotelservice: AdminHotelService, private router: Router,
    private statesService: AdminStatesService, private route: ActivatedRoute) { }

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
      imgGallery: this.fb.array([]),
      services: this.fb.array([]),
      activities: this.fb.array([]),
    });

    this.loading = false;

    this.getAllStates();

    this.route.paramMap.subscribe(params => {
      const hotelsId = params.get('idHotels');
      if (hotelsId) {
        this.getHotels(hotelsId);
      }
    });
  }

  getHotels(id: string) {
    this.hotelservice.getHotelById(id).subscribe(hoteles => {
      const hotel: Hotel = {
        $key: hoteles.payload.id,
        ...hoteles.payload.data(),
      }
      this.editarHotel = hotel;
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

    console.log(this.createHotelForm.value.habs);

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
    };

    console.log(hotel);
    this.loading = true;

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
