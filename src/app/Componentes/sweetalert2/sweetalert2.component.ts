import { Component, OnInit } from '@angular/core';
import { Entitys } from 'src/app/Entitys';
// Jquery
declare var $:any;
// SweetAlert 2 V11.4.8
declare var Swal:any;
// AirDatepicker V3.3.3
declare var AirDatepicker:any;
@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.component.html',
  styleUrls: ['./sweetalert2.component.scss']
})
export class Sweetalert2Component implements OnInit {

  entity = new Entitys();

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title: 'WOW!',
      text: 'Sweetalert 2 INSTALADO!!',
      icon: 'success',
      confirmButtonText: 'Cool',
      footer: 'Front '+ this.entity.version
    });
  }

}
