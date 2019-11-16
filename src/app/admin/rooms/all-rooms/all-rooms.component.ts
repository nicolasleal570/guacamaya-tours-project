import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { AdminRoomsService } from 'src/app/services/admin-rooms.service';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.scss']
})
export class AllRoomsComponent implements OnInit {

  rooms: Room[] = [];
  loading: boolean = false;
  deleting: boolean = false;

  constructor(private roomService: AdminRoomsService) { }

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms(){
    this.roomService.getRooms().subscribe(array => {
      this.rooms = array.map(item => {
        const room: Room = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return room;
      });
    });
  }



}
