import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from './entidades';
declare var Swal:any;
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //Entidades
  model = new Model();

  constructor(private router : Router) {}

  ngOnInit() {
    localStorage.setItem("llave","0");//importante inicializa la llave en 0
  }

  logeo(){
    this.model.showLoading = true;
    setTimeout(() => {
      this.model.showLoading = false;
      this.router.navigate(['/front/home']);
      localStorage.setItem("llave","1");//asignamos valor a la llave
    }, 800);
  }
}
