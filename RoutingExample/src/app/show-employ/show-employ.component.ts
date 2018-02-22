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

  constructor(private _serv : EmployeeService) { }

  model=new Employee();
  employee : Observable<Employee>;
  show() {
    this.employee=this._serv.getEmploy(this.model.empId);
  }
  ngOnInit() {
  }

}
