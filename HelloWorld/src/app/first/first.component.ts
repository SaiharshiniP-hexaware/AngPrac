import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  name : string;
  company : string;
  constructor() { 
    this.name ="harshini";
    this.company ="Hexaware";
  }
  ngOnInit() {
  }

}
