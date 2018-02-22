import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  users : Observable<User[]>;
  constructor(private userServ : UserService) { 
    this.users=this.userServ.getUsers();
  }


  ngOnInit() {
  }

}
