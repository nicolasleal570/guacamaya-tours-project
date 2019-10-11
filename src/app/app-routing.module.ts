import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';
import { HomePageComponent } from './components/client-layout/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: ClientLayoutComponent, children: [
    { path: '', component: HomePageComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
