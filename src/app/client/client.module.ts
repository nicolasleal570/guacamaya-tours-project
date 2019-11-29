import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './partials/contact/contact.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { SelectedHotelComponent } from './selected-hotel/selected-hotel.component';
import { ShowItinerarioComponent } from './show-itinerario/show-itinerario.component';
import { CreateItinerarioComponent } from './create-itinerario/create-itinerario.component';
import { SearchByStatePipe } from '../pipes/search-by-state.pipe';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BigLoaderComponent } from './partials/big-loader/big-loader.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AlternativeHeaderComponent } from './partials/alternative-header/alternative-header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
import { EstadosComponent } from './estados/estados.component';
import { EstadoCardComponent } from './partials/estado-card/estado-card.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCardComponent } from './partials/category-card/category-card.component';


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
    CreateItinerarioComponent,
    SearchByStatePipe,
    LoginComponent,
    BigLoaderComponent,
    CartComponent,
    FooterComponent,
    AlternativeHeaderComponent,
    EstadosComponent,
    EstadoCardComponent,
    CategoryComponent,
    CategoryCardComponent

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgxPayPalModule,

  ]
})
export class ClientModule { }
