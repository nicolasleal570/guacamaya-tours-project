import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Destino } from 'src/app/models/destino';
@Component({
  selector: 'app-states',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  estados: State[] = [];
  destinos: Destino[] = [];
  loading: boolean = false;
  stateId: string = '';

  constructor(private sService: AdminStatesService) {
  }

  ngOnInit() {
    this.getStatesFromService();
  }

  getStatesFromService() {
    this.loading = true;
    this.sService.getStates().subscribe((actionArray) => {
      this.estados = actionArray.map(item => {
        const estado: State = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };


        return estado;

      });

      this.loading = false;
    });
  }
}
