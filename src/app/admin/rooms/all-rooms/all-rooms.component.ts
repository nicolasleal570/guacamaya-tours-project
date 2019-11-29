import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.scss']
})
export class AllRoomsComponent implements OnInit {

  rooms: Room[] = [];
  loading: boolean = false;
  deleting: boolean = false;

  constructor(private roomService: AdminRoomsService, private router: Router) { }

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms(){
    this.loading = true;
    this.rooms = [];
    this.roomService.getRooms().subscribe(array => {
      this.rooms = array.map(item => {
        const room: Room = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.loading = false;
        return room;
      });
    });
  }

  deleteHotel(roomId: string){
    this.deleting = true;
    this.roomService.deleteRoom(roomId).then(() => {

      console.log('HAB ELIMINADO');

    }).catch((err) => {
      this.deleting = false;
      console.log(err);
    }).finally(() => {
      this.deleting = false;
    });
  }
  
  editButtonClick(id: string){
    this.router.navigate(['/admin/habitaciones', id, 'editar']);
    console.log(id);
  }



}
