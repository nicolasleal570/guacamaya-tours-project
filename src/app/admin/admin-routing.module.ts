import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllHotelsComponent } from './hotels/all-hotels/all-hotels.component';
import { CreateHotelComponent } from './hotels/create-hotel/create-hotel.component';
import { AllDestinosComponent } from './destinos/all-destinos/all-destinos.component';
import { CreateDestinoComponent } from './destinos/create-destino/create-destino.component';


const routes: Routes = [
  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'hoteles', component: AllHotelsComponent },
    { path: 'hoteles/crear', component: CreateHotelComponent },
    { path: '', component: DashboardComponent },
    { path: 'destinos', component: AllDestinosComponent },
    { path: 'destinos/crear', component: CreateDestinoComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
