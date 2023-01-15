import { Component, OnInit } from '@angular/core';
import { Model } from './entidades';

@Component({
  selector: 'app-time-modal',
  templateUrl: './time-modal.component.html',
  styleUrls: ['./time-modal.component.scss']
})
export class TimeModalComponent implements OnInit {

  model = new Model();

  constructor() { }

  ngOnInit() {
    console.log(this.model)
  }

}
