import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './partials/header/header.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { HotelCardComponent } from './partials/hotel-card/hotel-card.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { TituloComponent } from './partials/titulo/titulo.component';
import { DisplayComponent } from './partials/display/display.component';
import { DestinoComponent } from './destino/destino.component';
import { NavbarTreeviewComponent } from './partials/navbar-treeview/navbar-treeview.component';
import { SelectedDestinoComponent } from './selected-destino/selected-destino.component';
import { DestinoCardComponent } from './partials/destino-card/destino-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './partials/contact/contact.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { SelectedHotelComponent } from './selected-hotel/selected-hotel.component';
import { ShowItinerarioComponent } from './show-itinerario/show-itinerario.component';
import { CreateItinerarioComponent } from './create-itinerario/create-itinerario.component';


@NgModule({
  declarations: [
    HomePageComponent, HeaderComponent, ClientLayoutComponent,
    HotelCardComponent, NavbarComponent, BuscarComponent,
    TituloComponent, DisplayComponent, DestinoComponent,
    NavbarTreeviewComponent,
    SelectedDestinoComponent,
    DestinoCardComponent,
    ContactComponent,
    HotelesComponent,
    ContactComponent,
    SelectedHotelComponent,
    ShowItinerarioComponent,
    CreateItinerarioComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule

  ]
})
export class ClientModule { }
