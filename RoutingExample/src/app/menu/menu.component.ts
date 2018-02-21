import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name :string;
  userName:string;
  passWord:string;
  constructor(private _router:Router) {
 this.name="Hexaware";
 this.userName="harshini";
 this.passWord="harshini";
 localStorage.setItem("name",this.name);
   }
  first() {
    this._router.navigate(['/First']);
  }
  second() {
    this._router.navigate(['/Second']);
  }
  third() {
    this._router.navigate(['/Third']);
  }
  ngOnInit() {
  }

}
