import { Component, OnDestroy, OnInit } from '@angular/core';
import { Entitys } from '../Entitys';
import { AccesoService } from '../services/sesion/sesion.service';
@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnDestroy,OnInit{

  entity = new Entitys();
  title = 'Front';
  timeoutId:any;
  constructor(private access: AccesoService){}

  ngOnInit() {
    this.resetTimer();
    window.addEventListener('mousemove', this.resetTimer.bind(this));
    window.addEventListener('mousedown', this.resetTimer.bind(this));
    window.addEventListener('keypress', this.resetTimer.bind(this));
    window.addEventListener('touchmove', this.resetTimer.bind(this));
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  resetTimer() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.access.logout();
    }, 600000); //600000 10 minutos de inactividad antes de cerrar sesión
  }

  clearTimer() {
    clearTimeout(this.timeoutId);
  }
}
