import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';

@Component({
  selector: 'app-all-destinos',
  templateUrl: './all-destinos.component.html',
  styleUrls: ['./all-destinos.component.scss']
})
export class AllDestinosComponent implements OnInit {

  destinos: Destino[];

  constructor(private dService: DestinoService) {
  }

  ngOnInit() {
    this.dService.getDestinos.subscribe(destino => {
      this.destinos = destino;
    });
  }

}
