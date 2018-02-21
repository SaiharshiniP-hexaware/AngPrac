import { Component, OnInit } from '@angular/core';
import {Country} from '../Country';
@Component({
  selector: 'app-name-drop-down',
  templateUrl: './name-drop-down.component.html',
  styleUrls: ['./name-drop-down.component.css']
})
export class NameDropDownComponent implements OnInit {
  countries = [new Country(1,"India"),
              new Country(2,"USA"),
              new Country(3,"Australia")
]                                 
  constructor() { }

  ngOnInit() {
  }

}
