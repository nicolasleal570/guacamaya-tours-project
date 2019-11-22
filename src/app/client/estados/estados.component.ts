import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-states',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  estados: State[] = [];
  loading: boolean = false;

  constructor(private sService: AdminStatesService) { }

  ngOnInit() {
    this.getStatesFromService();
  }

  getStatesFromService() {
    this.loading = true;
    this.sService.getStates().subscribe((actionArray) =>{
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
