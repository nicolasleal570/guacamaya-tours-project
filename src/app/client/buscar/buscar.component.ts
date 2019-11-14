import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';
import { FormsModule, FormControl, FormBuilder} from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  states: State[] = [];
  destinos: Destino[] = [];
  selectedState: string = '';
  selectedCategory: string = '';

  constructor(private stateService: AdminStatesService, private dservice: DestinoService) { }
  
  ngOnInit() {

    this.getStatesFromService();
    this.getDestinosFromService();

  }

  getStatesFromService() {
    this.stateService.getStates().subscribe((states) => {
      states.forEach((item) => {
        const state: State = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        
        this.states.push(state);
      })
    })
  }

  getDestinosFromService() {
    this.dservice.getDestinos.subscribe((destino) => {
      destino.forEach( item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.destinos.push(destino);

      })
  });
  }



}
