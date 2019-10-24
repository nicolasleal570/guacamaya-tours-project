import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  private sideBarHidden: boolean;

  contentTitle: string;
  contentDescription: string;

  constructor() {
    this.contentTitle = 'Administrador, ';
    this.contentDescription = 'aquí encontrarás todo lo necesario para suministrarle información a la plataforma';
  }

  ngOnInit() {
    this.sideBarHidden = false;
  }

  hideSideBarMenu(){
    this.sideBarHidden = !this.sideBarHidden;
  }

}
