import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-estado-card',
  templateUrl: './estado-card.component.html',
  styleUrls: ['./estado-card.component.scss']
})
export class EstadoCardComponent implements OnInit {

  constructor() { }
  @Input() estado: State;
  ngOnInit() {
  }

}
