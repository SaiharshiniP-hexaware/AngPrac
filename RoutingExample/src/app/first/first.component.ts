import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 name1 :string;
  constructor() { 
    this.name1=localStorage.getItem("name1");
  }

  ngOnInit() {
  }

}
