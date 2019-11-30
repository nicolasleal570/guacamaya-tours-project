import { Component, OnInit } from '@angular/core';
import { ItinerarioService } from 'src/app/services/itinerario.service';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {

  reservaciones: Reserva[] = []

  constructor(private reservaSV: ItinerarioService) { }

  ngOnInit() {
    this.reservaSV.getReservas().subscribe(array => {
      this.reservaciones = array.map(item => {
        const res: Reserva = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return res;
      });
    });
  }

}
