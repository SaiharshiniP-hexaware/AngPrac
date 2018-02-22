import { Component, OnInit } from '@angular/core';
import {DemoService } from '../demo.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  name :string;
  result1:string;
  constructor(private _serv1:DemoService) {
    this.name=localStorage.getItem("name");
   }
   hello() {
    this.result1=this._serv1.sayHello();
  }
 topic() {
   this.result1=this._serv1.topic();
 }
 company() {
   this.result1=this._serv1.company();
   }

  ngOnInit() {
  }

}
