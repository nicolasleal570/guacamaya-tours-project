import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './partials/header/header.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { HotelCardComponent } from './partials/hotel-card/hotel-card.component';
import { NavbarComponent } from './partials/navbar/navbar.component';


@NgModule({
  declarations: [HomePageComponent, HeaderComponent, ClientLayoutComponent, HotelCardComponent, NavbarComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
