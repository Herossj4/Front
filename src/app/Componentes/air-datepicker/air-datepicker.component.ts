import { Component, OnInit } from '@angular/core';
// Jquery
declare var $:any;
// SweetAlert 2 V11.4.8
declare var Swal:any;
// AirDatepicker V3.3.3
declare var AirDatepicker:any;
@Component({
  selector: 'app-air-datepicker',
  templateUrl: './air-datepicker.component.html',
  styleUrls: ['./air-datepicker.component.scss']
})
export class AirDatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new AirDatepicker('#fecha', {
      timepicker: true,
      timeFormat: 'hh:mm AA'
    });
  }

}
