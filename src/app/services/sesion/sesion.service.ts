import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { Entitys } from 'src/app/Entitys';

declare var Swal:any;

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  entity = new Entitys();

  constructor(private router : Router) {}

  Encriptarllave(dato:any){
    var tamaño = 256;
    var enc = CryptoJS.lib.WordArray.random(16);
    var Key = CryptoJS.PBKDF2("Qh07WQJsrKk032t80mw6nLkmczGPi9HwnpZbClojoq8S8djFjZh83YWoqmN9oMin",enc,{
      keySize: tamaño/32,
      iterations: 100
    });

    var iv = CryptoJS.lib.WordArray.random(128/8);
    var encripted = CryptoJS.AES.encrypt(dato,Key,{
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });

    var resultado = CryptoJS.enc.Base64.stringify(enc.concat(iv).concat(encripted.ciphertext));
    return resultado;
  }

  obtenerIDunico(){
    var navegador_info = window.navigator;
    var pantalla_info = window.screen;
    var vid:any = navegador_info.mimeTypes.length;
    vid += navegador_info.userAgent.replace(/\D+/g,'');
    vid += navegador_info.plugins.length;
    vid += pantalla_info.height || '';
    vid += pantalla_info.width || '';
    vid += pantalla_info.pixelDepth || '';
    return vid;
  }

  DesencriptarData(dato:any){
    try {
      const bytes = CryptoJS.AES.decrypt(dato,this.obtenerIDunico());
      if(bytes.toString()){
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }else {
        Swal.fire({
          title:'Error',
          text: 'Ha ocurrido un error',
          icon: 'error'
        });
        return false;
      }
    } catch (error) {
      Swal.fire({
        title:'Error',
        text: error,
        icon: 'error'
      });
      return false;
    }
  }

  EncriptarData(dato:any){
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(dato), this.obtenerIDunico()).toString();
    } catch (error) {
      Swal.fire({
        title:'Error',
        text: error,
        icon: 'error'
      });
      return false;
    }
  }
  logout(btn = 0){
    if(this.entity.Key != 0){
     if(btn == 0){
        Swal.fire({
          title: 'Perdida de Sesion',
          text: 'Por Favor inicie nuevamente la sesion',
          icon: 'warning',
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: false, // Oculta el botón de cancelar
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar',
          footer: 'Front '+ this.entity.version
        }).then((result:any) => {
          // Aquí puedes agregar lo que quieres hacer después de que el usuario haga clic en "Aceptar"
          if (result.isConfirmed) {
            this.router.navigate(['/login']);
          }
        });
     }else{
      Swal.fire({
        title: 'Cerrando Sesion',
        text: 'Vuelva pronto',
        icon:'success',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: false, // Oculta el botón de cancelar
        showConfirmButton:false,
        footer: 'Front '+ this.entity.version
      });
      setTimeout(() => {
        Swal.close();
        this.router.navigate(['/login']);
      }, 1500);
     }
      localStorage.setItem("llave","0");
    }
  }
}

