import { Component, OnInit, Input } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {

  destinos: Destino[];

  constructor(private dservice: DestinoService) { }

  ngOnInit() {
    this.dservice.getDestinos.subscribe(destino => {
      destino.forEach( item => {
        const data = item.payload.doc.data();
        const destino: Destino = {
          $key: item.payload.doc.id,
          name: data.name,
          description: data.description,
          categoryId: data.categoryId,
          location: data.location,
          stateId: data.stateId,
          imgBanner: data.imgBanner,
        }

        this.destinos.push(destino);
      })
  });
  }

}
