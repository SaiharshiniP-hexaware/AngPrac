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
  login (numb) {
localStorage.setItem("id",numb);
this._router.navigate(['/Login']);

  }
  ngOnInit() {
  }

}
