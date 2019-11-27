import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { Room } from 'src/app/models/room';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

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
  editarHabitacion: Room = null;

  constructor(private fb: FormBuilder, private hotelService: AdminHotelService, private router: Router, private habService: AdminRoomsService, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.createRoomFormGroup();
    this.getAllHotels();

    this.loading = false;
    this.rout.paramMap.subscribe(params => {
      const id = params.get('idHabitaciones');
      this.selecHabitacionEdit(id);
    })
  }

  selecHabitacionEdit(idHabitacion: string) {
    this.habService.getRoomById(idHabitacion).subscribe(item => {
      const room: Room = {
        $key: item.payload.id,
        ...item.payload.data()
      }
      this.editarHabitacion = room;
      console.log(room);
      this.editHabitacion(room);
    
    })
  }

  editHabitacion(room: Room) {
    this.createRoomForm.patchValue({
      name: room.name,
      description: room.description,
      imgPresentation: room.imgPresentation,
      maxPersons: room.maxPersons,
      pricePerNight: room.pricePerNight,
      hotelId: room.hotelId,
      available: room.available
    });

    this.createRoomForm.setControl('adventajes', this.existingAdventajes(room.adventajes));
    this.createRoomForm.setControl('gallery', this.existingGallery(room.gallery));
  }

  existingAdventajes(adventajes: any[]): FormArray {
    const formArray = this.fb.array([]);

    adventajes.forEach(item => {
      formArray.push(this.fb.group({
        path: item.path
      }));
    });

    return formArray;
  }

  existingGallery(gallery: any[]): FormArray {
    const formArray = this.fb.array([]);

    gallery.forEach(item => {
      formArray.push(this.fb.group({
        path: item.path
      }));
    });

    return formArray;
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
      available: this.fb.array([]),
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

    if(this.editHabitacion) {
      this.habService.updateRoom(room, this.editarHabitacion.$key).then( () => {
        console.log('editado', room.$key);
        this.loading = false;
      }).catch(err => {
        console.log(err);
        this.loading = false;
      }).finally( () => {
        this.router.navigate(['/admin/habitaciones']);
      });
    } else {
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

}
