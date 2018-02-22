import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Employee} from './Employee';
@Injectable()
export class EmployeeService {

  constructor(private http : Http) { }
  getemployees() : Observable<Employee[]>
  {
    return this.http.get("http://localhost:8080/ftp18/api/employees").
    map((res : Response) => res.json()).
    catch((error : any) =>
  Observable.throw(error.json().error|| 'Not Found'));
  
  }

  getEmploy(empno) : Observable<Employee> {
    return this.http.get("http://localhost:8080/ftp18/api/employees/"+empno).
    map((res : Response) => res.json()).
    catch((error : any) =>
  Observable.throw(error.json().error|| 'Not Found'));
  }
  getManager(empmgrno) : Observable<Employee[]> {
    return this.http.get("http://localhost:8080/ftp18/api/employees/listmgr/"+empmgrno).
    map((res : Response) => res.json()).
    catch((error : any) =>
  Observable.throw(error.json().error|| 'Not Found'));
  }
}
