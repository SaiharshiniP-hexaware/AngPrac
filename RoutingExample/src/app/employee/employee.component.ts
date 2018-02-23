import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Observable} from 'rxjs/Rx';
import { Router } from "@angular/router";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp : Observable<Employee[]>;
  constructor(private empServ : EmployeeService,private _router : Router) { 
  this.emp=this.empServ.getemployees();
  
  }
  numb : number;
  numb1 : number;
  login (numb,numb1) {
localStorage.setItem("id",numb);
localStorage.setItem("mid",numb1);
this._router.navigate(['/Login']);
  }
  ngOnInit() {
  }

}
