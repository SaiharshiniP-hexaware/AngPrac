import { Component, OnInit } from '@angular/core';
import {DemoService} from '../demo.service'; 
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 name1 :string;
 result :string;
  constructor(private _serv : DemoService) { 
    this.name1=localStorage.getItem("name1");
  }
  hello() {
    this.result=this._serv.sayHello();
  }
 topic() {
   this.result=this._serv.topic();
 }
 company() {
   this.result=this._serv.company();
   }
  ngOnInit() {
  }

}
