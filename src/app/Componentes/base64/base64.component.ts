import { Component, OnInit } from '@angular/core';
import { Model } from './entidades';
import { Observable, Subscriber } from 'rxjs';
import { Entitys } from 'src/app/Entitys';

declare var $: any;
declare var Swal:any;
var base64String:any;
@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  entity = new Entitys();
  model = new Model();
  title = 'imgtobase64';
  imagen!: Observable<any>;
  base64!: any;

  constructor() { }

  ngOnInit() {
  }

  changeMultimedia = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.model.Multimedia = file;
    this.model.nombreMultimedia = ' ...' + file.name;
    this.convertToBase64(file)
  }

  convertToBase64(file: File) {
    const base64 = new Observable((subscriber: Subscriber<any>) => {
      this.LeerArchivo(file, subscriber);
    });
    base64.subscribe((d) => {
      this.base64 = d;
      this.model.MultimediaBase64 = d;
    })
  }

  LeerArchivo(file: File, subscriber: Subscriber<any>) {
    const lector = new FileReader();
    lector.readAsDataURL(file);
    lector.onload = () => {
      console.log('filereader',lector)
      subscriber.next(lector.result);
      subscriber.complete();
    };
    lector.onerror = (error) => {
      Swal.fire({
        title: '<strong>HTML <u>ERROR</u></strong>',
        icon: 'warning',
        html: '<b>Seleccione un Archivo</b>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'<i class="fa fa-thumbs-up"></i> Aceptar!',
        footer: 'Front '+ this.entity.version
      });
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
