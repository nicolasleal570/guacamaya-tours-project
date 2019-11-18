import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  private sideBarHidden: boolean;

  contentTitle: string;
  contentDescription: string;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.contentTitle = 'Administrador, ';
    this.contentDescription = 'aquí encontrarás todo lo necesario para suministrarle información a la plataforma';
  }

  ngOnInit() {
    this.sideBarHidden = false;
    this.auth.user.subscribe(user => {
      if (user) {
        console.log('Admin email', user.email);
      }
    });
    
  }

  logout(){
    this.auth.auth.signOut().then(success => {
      console.log('Sesión cerrada');
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
    })
  }

  hideSideBarMenu(){
    this.sideBarHidden = !this.sideBarHidden;
  }

}
