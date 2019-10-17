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
    this.contentTitle = 'Page title';
    this.contentDescription = 'Description of the content';
  }

  ngOnInit() {
    this.sideBarHidden = false;
  }

  hideSideBarMenu(){
    this.sideBarHidden = !this.sideBarHidden;
  }

}
