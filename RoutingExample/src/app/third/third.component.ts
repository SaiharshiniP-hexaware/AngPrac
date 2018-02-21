import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  name:string;
  constructor() {

   this.name=localStorage.getItem("name"); }

  ngOnInit() {
  }

}
