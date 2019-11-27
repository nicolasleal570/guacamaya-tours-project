import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Destino } from 'src/app/models/destino';
import { Hotel } from 'src/app/models/hotel';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';

@Component({
  selector: 'app-selected-destino',
  templateUrl: './selected-destino.component.html',
  styleUrls: ['./selected-destino.component.scss']
})
export class SelectedDestinoComponent implements OnInit {

  destino: Destino;
  hoteles: Hotel[];
  cultura: string[];
  descripcion: string[];

  constructor(private route: ActivatedRoute, private dService: AdminDestinoService, private hserv: AdminHotelService ) {
    this.route.paramMap.subscribe(params => {
      this.dService.getDestinoById(params.get('destinoId')).subscribe(array => {
        this.destino = {
          $key: array.payload.id,
          ...array.payload.data()
        } as Destino;
      });
    });
  }

  ngOnInit() {

    this.getAllHotels();
  }


  getAllHotels() {
    this.hserv.getHotels().subscribe(array => {
      this.hoteles = array.map(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return hotel;
      });

    });
  }

}
