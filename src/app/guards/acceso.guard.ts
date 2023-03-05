import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Entitys } from '../Entitys';

declare var Swal:any;

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate {
  entity = new Entitys();
  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if(this.entity.Key == 0){
      Swal.fire({
        icon: 'error',
        title:'Acceso denegado',
        text: 'Vuelva a iniciar sesion',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        footer: 'Front '+ this.entity.version
      }).then(() => {
        this.router.navigate(['']);
      });
      return false;
    }else{
      return true;
    }
  }

}
