import { Component, OnInit } from '@angular/core';
import {Name} from '../Name';
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  model=new Name();
  full()
  {
    var fullName=this.model.firstName+this.model.lastName;
    this.model.fullName=fullName;
  }

  constructor() { }

  ngOnInit() {
  }

}
