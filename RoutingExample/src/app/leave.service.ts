import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {LeaveDetails} from './LeaveDetails';
@Injectable()
export class LeaveService {

  constructor(private http : Http) { }
  getLeaveHistory(lempno) : Observable<LeaveDetails[]>
  {
    return this.http.get("http://localhost:8080/ftp18/api/LeaveDetails"+ lempno).
    map((res : Response) => res.json()).
    catch((error : any) =>
  Observable.throw(error.json().error|| 'Not Found'));
  
  }
}
