import { Component, OnInit } from '@angular/core';
import {Calc} from '../Calc'
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
model= new Calc();
sum() {
  this.model.res =this.model.fno+this.model.sno;
}
sub() {
  this.model.res =this.model.fno-this.model.sno;
}
mul() {
  this.model.res =this.model.fno*this.model.sno;
}
div() {
  this.model.res =this.model.fno/this.model.sno;
}
  constructor() { }

  ngOnInit() {
  }
}
