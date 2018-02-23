import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";
import { Employee } from "../Employee";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-show-manager',
  templateUrl: './show-manager.component.html',
  styleUrls: ['./show-manager.component.css']
})
export class ShowManagerComponent implements OnInit {

  mid:number;
  employee : Observable<Employee>;
  constructor(private _serv : EmployeeService) { 
    this.mid = parseInt(localStorage.getItem("mid"));
    this.employee=this._serv.getEmploy(this.mid);
  }

  ngOnInit() {
  }

}
