import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllHotelsComponent } from './hotels/all-hotels/all-hotels.component';
import { CreateHotelComponent } from './hotels/create-hotel/create-hotel.component';
import { AllDestinosComponent } from './destinos/all-destinos/all-destinos.component';
import { CreateDestinoComponent } from './destinos/create-destino/create-destino.component';
import { AllStatesComponent } from './estados/all-states/all-states.component';
import { CreateStatesComponent } from './estados/create-states/create-states.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { AllCategoriesComponent } from './categories/all-categories/all-categories.component';
import { AllRoomsComponent } from './rooms/all-rooms/all-rooms.component';
import { CreateRoomComponent } from './rooms/create-room/create-room.component';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  { path: '', component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
    { path: '', component: DashboardComponent },
    { path: 'hoteles', component: AllHotelsComponent },
    { path: 'hoteles/crear', component: CreateHotelComponent },
    { path: 'habitaciones', component: AllRoomsComponent },
    { path: 'habitaciones/crear', component: CreateRoomComponent },
    { path: '', component: DashboardComponent },
    { path: 'destinos', component: AllDestinosComponent },
    { path: 'destinos/crear', component: CreateDestinoComponent },
    { path: '', component: DashboardComponent },
    { path: 'estados', component: AllStatesComponent },
    { path: 'estados/crear', component: CreateStatesComponent },
    { path: 'estados/:idEstado/editar', component: CreateStatesComponent },
    { path: 'categorias', component: AllCategoriesComponent },
    { path: 'categorias/crear', component: CreateCategoryComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
