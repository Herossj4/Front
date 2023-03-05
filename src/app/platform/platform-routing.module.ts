import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from '../guards/acceso.guard';
import { Entitys } from '../Entitys';

import { LoginComponent } from '../Componentes/login/login.component';
import { HomeComponent } from '../Componentes/home/home.component';
import { FontAwesomeComponent } from '../Componentes/font-awesome/font-awesome.component';
import { MenuComponent } from '../Componentes/menu/menu.component';
import { NotFoundComponent } from '../Componentes/not-found/not-found.component';
import { AirDatepickerComponent } from '../Componentes/air-datepicker/air-datepicker.component';
import { Sweetalert2Component } from '../Componentes/sweetalert2/sweetalert2.component';
import { TimeModalComponent } from '../Componentes/time-modal/time-modal.component';
import { PlatformComponent } from './platform.component';
import { Base64Component } from '../Componentes/base64/base64.component';
import { BannerComponent } from '../Componentes/banner/banner.component';

var entidad = new Entitys();

var ruta = String(entidad.ruta);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'front', component: PlatformComponent, children:[
    { path: 'home', component: HomeComponent, canActivate: [AccesoGuard]},
    { path: 'font', component: FontAwesomeComponent, canActivate: [AccesoGuard]},
    { path: 'menu', component: MenuComponent, canActivate: [AccesoGuard]},
    { path: '404', component: NotFoundComponent, canActivate: [AccesoGuard]},
    { path: 'date-picker', component: AirDatepickerComponent, canActivate: [AccesoGuard]},
    { path: 'sweetalert', component: Sweetalert2Component, canActivate: [AccesoGuard]},
    { path: 'time', component: TimeModalComponent, canActivate: [AccesoGuard]},
    { path: 'base64', component: Base64Component, canActivate: [AccesoGuard]},
    { path: 'banner', component: BannerComponent, canActivate: [AccesoGuard]},
    { path: '**', redirectTo: ruta}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule {constructor() {
  console.log(routes)
} }
