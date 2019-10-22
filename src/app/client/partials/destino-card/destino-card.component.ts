import { Component, OnInit, Input } from '@angular/core';
import { Destino } from 'src/app/models/destino';

@Component({
  selector: 'app-destino-card',
  templateUrl: './destino-card.component.html',
  styleUrls: ['./destino-card.component.scss']
})
export class DestinoCardComponent implements OnInit {

  constructor() { }
  @Input() destino: Destino;
  ngOnInit() {
  }

}
