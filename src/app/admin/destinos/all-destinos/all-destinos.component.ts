import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-destinos',
  templateUrl: './all-destinos.component.html',
  styleUrls: ['./all-destinos.component.scss']
})
export class AllDestinosComponent implements OnInit {

  destinos: [];

  constructor() {
    this.destinos = [];
  }

  ngOnInit() {
  }

}
