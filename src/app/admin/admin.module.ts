import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { TreeviewComponent } from './partials/treeview/treeview.component';
import { AllHotelsComponent } from './hotels/all-hotels/all-hotels.component';
import { CreateHotelComponent } from './hotels/create-hotel/create-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllDestinosComponent } from './destinos/all-destinos/all-destinos.component';
import { CreateDestinoComponent } from './destinos/create-destino/create-destino.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoaderComponent } from './partials/loader/loader.component';
import { AllStatesComponent } from './estados/all-states/all-states.component';
import { CreateStatesComponent } from './estados/create-states/create-states.component';


@NgModule({
  declarations: [AdminLayoutComponent, DashboardComponent, SidebarComponent, TreeviewComponent, AllHotelsComponent, CreateHotelComponent, AllDestinosComponent, CreateDestinoComponent, LoaderComponent, AllStatesComponent, CreateStatesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ]
})
export class AdminModule { }
