import { Component, OnInit } from '@angular/core';
import {LoginScreen} from '../LoginScreen';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  model= new LoginScreen();
  message :string;
  constructor(private _router:Router) {
    this.model.userName=localStorage.getItem("id");
   }
  show() {
 
 this._router.navigate(['/showm']);
 this._router.navigate(['/leavehistory']);
  }
  ngOnInit(){
  }
}