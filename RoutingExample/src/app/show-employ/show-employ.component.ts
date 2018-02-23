import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {EmployeeService} from '../employee.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-show-employ',
  templateUrl: './show-employ.component.html',
  styleUrls: ['./show-employ.component.css']
})
export class ShowEmployComponent implements OnInit {
  eid:number;
  employee : Observable<Employee>;
  constructor(private _serv : EmployeeService) { 
    this.eid = parseInt(localStorage.getItem("id"));
    this.employee=this._serv.getEmploy(this.eid);
  }
  ngOnInit() {
  }

}
