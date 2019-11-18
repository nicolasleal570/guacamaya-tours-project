import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  private sideBarHidden: boolean;

  contentTitle: string;
  contentDescription: string;

  constructor(private auth: AuthService, private router: Router) {
    this.contentTitle = 'Administrador, ';
    this.contentDescription = 'aquí encontrarás todo lo necesario para suministrarle información a la plataforma';
  }

  ngOnInit() {
    this.sideBarHidden = false;
    
  }

  logout(){
    this.auth.signOut();
  }

  hideSideBarMenu(){
    this.sideBarHidden = !this.sideBarHidden;
  }

}
