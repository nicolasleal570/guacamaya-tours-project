import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';
import { NavbarComponent } from './components/client-layout/partials/navbar/navbar.component';
import { HomePageComponent } from './components/client-layout/home-page/home-page.component';
import { HotelCardComponent } from './components/client-layout/partials/hotel-card/hotel-card.component';
import { HeaderComponent } from './components/client-layout/partials/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    NavbarComponent,
    HomePageComponent,
    HeaderComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
