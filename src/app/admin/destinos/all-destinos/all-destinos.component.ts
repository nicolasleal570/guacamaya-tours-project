import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService} from 'src/app/services/admin-destino.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-destinos',
  templateUrl: './all-destinos.component.html',
  styleUrls: ['./all-destinos.component.scss']
})
export class AllDestinosComponent implements OnInit {

  destinos: Destino[] = [];
  loading: boolean = false;
  deleting: boolean = false;

  constructor(private dService : AdminDestinoService , private router: Router) {
  }

  ngOnInit() {
    this.getDestinosFromService();
  }

  deleteDestino($key) {
    this.deleting = true;
    this.dService.deleteDestino($key).then(() => {

      console.log('DESTINO ELIMINADO');

    }).catch((err) => {
      this.deleting = false;
      console.log(err);
    }).finally(() => {
      this.deleting = false;
    });
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

  editButtonClick(id: string){
    this.router.navigate(['/admin/destinos', id, 'editar']);
    console.log(id);
  }

}
