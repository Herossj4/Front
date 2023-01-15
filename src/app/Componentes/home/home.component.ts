import { Component, OnInit } from '@angular/core';
import { Model } from './entidades';
// Jquery
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model = new Model();

  constructor() { }

  ngOnInit() {
    this.reloj();
  }

  reloj(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = this.checkTime(m);
    s = this.checkTime(s);

    if(h > 12) {
      h = h - 12;
    }
    if(h == 0){
      h = 12;
    }
    this.model.reloj = h + ":" + m;
    let t = setTimeout(() => {
      this.reloj();
    }, 500);
  }

 checkTime(i:any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
