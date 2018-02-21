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
  constructor(private _router:Router) { }
  show() {
    var user=this.model.userName;
  
    var pwd=this.model.passWord;
  if(user=="hexaware" && pwd=="hexaware"){
// this.message= "correct credentials";
 this._router.navigate(['/menu']);
  }
  else {
    this.message="Invalid credentials";
  }
  }
  ngOnInit(){
  }
}