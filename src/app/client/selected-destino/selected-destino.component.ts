import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinoService } from 'src/app/services/destino.service';
import { Destino } from 'src/app/models/destino';

@Component({
  selector: 'app-selected-destino',
  templateUrl: './selected-destino.component.html',
  styleUrls: ['./selected-destino.component.scss']
})
export class SelectedDestinoComponent implements OnInit {

  destino: Destino;

  constructor(private route: ActivatedRoute, private dService: DestinoService) {
    this.route.paramMap.subscribe(params => {
      this.destino = this.dService.getDestinoFromId(params.get('destinoId'));
    });
  }

  ngOnInit() {
  }

}
