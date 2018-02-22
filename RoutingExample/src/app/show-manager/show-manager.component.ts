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

  constructor(private _serv : EmployeeService) { }
  
    model=new Employee();
    employee : Observable<Employee[]>;
    show() {
      this.employee=this._serv.getManager(this.model.mgrId);
    }

  ngOnInit() {
  }

}
