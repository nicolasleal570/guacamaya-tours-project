import { Component, OnInit, Input } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {

  destinos: Destino[] = [];
  loading: boolean = false;

  constructor(private dService: AdminDestinoService) { }

  ngOnInit() {
    this.getDestinosFromService();
  }

  getDestinosFromService() {
    this.loading = true;
    this.destinos = [];
    this.dService.getDestinos().subscribe((actionArray) => {
      this.destinos = actionArray.map(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return destino;

      });

      this.loading = false;

    });
  }

}
