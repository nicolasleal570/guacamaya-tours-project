import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';
import { AdminDestinoService} from 'src/app/services/admin-destino.service';

@Component({
  selector: 'app-all-destinos',
  templateUrl: './all-destinos.component.html',
  styleUrls: ['./all-destinos.component.scss']
})
export class AllDestinosComponent implements OnInit {

  destinos: Destino[] = [];
  loading: boolean = false;

  constructor(private dService : AdminDestinoService) {
  }

  ngOnInit() {
    this.getDestinosFromService();
  }

  deleteDestino($key) {
    this.dService.deleteDestino($key).then(() => {

      console.log('DESTINO ELIMINADO');
      this.destinos = [];

    }).finally(() => {

      this.getDestinosFromService();

    });
  }

  getDestinosFromService() {
    this.loading = true;
    this.destinos = [];
    this.dService.getDestinos().subscribe((destinos) => {
      destinos.forEach(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.destinos.push(destino);

      });

      this.loading = false;

    });
  }

}
