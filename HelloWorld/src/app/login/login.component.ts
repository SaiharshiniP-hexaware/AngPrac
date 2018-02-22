import { Component, OnInit } from '@angular/core';
import {Login} from '../Login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model= new Login();
  message :string;
  constructor() {
    this.model.userName= localStorage.getItem("id");
   }
  show() {
    var user=this.model.userName;
  
    var pwd=this.model.passWord;
  if(user=="hexaware" && pwd=="hexaware"){
 this.message= "correct credentials";
  }
  else {
    this.message="Invalid credentials";
  }
  }
  ngOnInit(){
  }

}
