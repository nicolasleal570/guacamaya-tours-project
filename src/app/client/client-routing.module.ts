import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BuscarComponent } from './buscar/buscar.component';
import { DestinoComponent } from './destino/destino.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { SelectedDestinoComponent } from './selected-destino/selected-destino.component';



const routes: Routes = [
  { path: '', component: ClientLayoutComponent, children: [
    { path: '', component: HomePageComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'destinos', component: DestinoComponent },
    { path: 'destinos/:destinoId', component: SelectedDestinoComponent },
    { path: 'hoteles', component: HotelesComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
