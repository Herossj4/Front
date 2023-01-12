import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/Componentes/login/entidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //Entidades
  model = new Model();

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
