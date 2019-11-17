import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Destino } from 'src/app/models/destino';

@Component({
  selector: 'app-selected-destino',
  templateUrl: './selected-destino.component.html',
  styleUrls: ['./selected-destino.component.scss']
})
export class SelectedDestinoComponent implements OnInit {

  destino: Destino;

  constructor(private route: ActivatedRoute, private dService: AdminDestinoService) {
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
  }

}
