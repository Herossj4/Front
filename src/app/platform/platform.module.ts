import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { LoginComponent } from '../Componentes/login/login.component';
import { FontAwesomeComponent } from '../Componentes/font-awesome/font-awesome.component';
import { MenuComponent } from '../Componentes/menu/menu.component';
import { NotFoundComponent } from '../Componentes/not-found/not-found.component';
import { AirDatepickerComponent } from '../Componentes/air-datepicker/air-datepicker.component';
import { Sweetalert2Component } from '../Componentes/sweetalert2/sweetalert2.component';
import { HomeComponent } from '../Componentes/home/home.component';
import { TimeModalComponent } from '../Componentes/time-modal/time-modal.component';
import { ClienteComponent } from '../Componentes/cliente/cliente.component';
import { Base64Component } from '../Componentes/base64/base64.component';
import { BannerComponent } from '../Componentes/banner/banner.component';

@NgModule({
  declarations: [
    PlatformComponent,
    LoginComponent,
    FontAwesomeComponent,
    MenuComponent,
    NotFoundComponent,
    AirDatepickerComponent,
    Sweetalert2Component,
    HomeComponent,
    TimeModalComponent,
    ClienteComponent,
    Base64Component,
    BannerComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PlatformModule { }
