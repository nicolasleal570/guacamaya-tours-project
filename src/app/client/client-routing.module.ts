import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BuscarComponent } from './buscar/buscar.component';
import { DestinoComponent } from './destino/destino.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { SelectedDestinoComponent } from './selected-destino/selected-destino.component';
import { SelectedHotelComponent } from './selected-hotel/selected-hotel.component';
import { ShowItinerarioComponent } from './show-itinerario/show-itinerario.component';
import { CreateItinerarioComponent } from './create-itinerario/create-itinerario.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'destinos', component: DestinoComponent },
      { path: 'destinos/:destinoId', component: SelectedDestinoComponent },
      { path: 'categoria/:categoryId', component: DestinoComponent },    
      { path: 'hoteles', component: HotelesComponent },
      { path: 'hoteles/:hotelId', component: SelectedHotelComponent },
      { path: 'itinerario/crear', component: CreateItinerarioComponent },
      { path: 'itinerario/ver', component: ShowItinerarioComponent },
      { path: 'shopping/cart' , component: CartComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
