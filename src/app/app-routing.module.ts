import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { FontAwesomeComponent } from './Componentes/font-awesome/font-awesome.component';
import { RicheditComponent } from './Componentes/richedit/richedit.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { NotFoundComponent } from './Componentes/not-found/not-found.component';
import { AirDatepickerComponent } from './Componentes/air-datepicker/air-datepicker.component';
import { Sweetalert2Component } from './Componentes/sweetalert2/sweetalert2.component';
import { HomeComponent } from './Componentes/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'font', component: FontAwesomeComponent},
  { path: 'rich-edit', component: RicheditComponent},
  { path: 'menu', component: MenuComponent},
  { path: '404', component: NotFoundComponent},
  { path: 'date-picker', component: AirDatepickerComponent},
  { path: 'sweetalert', component: Sweetalert2Component},
  { path: '**', redirectTo:'404'}
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
