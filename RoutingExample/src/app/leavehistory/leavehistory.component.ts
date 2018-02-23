import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { LeaveDetails } from "../LeaveDetails";
import { LeaveService } from "../leave.service";

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent implements OnInit {

  lempid:number;
  LeaveDetails : Observable<LeaveDetails[]>;
  constructor(private _serv : LeaveService ) { 
    this.lempid = parseInt(localStorage.getItem("id"));
    this.LeaveDetails=this._serv.getLeaveHistory(this.lempid);
  }

  ngOnInit() {
  }

}
