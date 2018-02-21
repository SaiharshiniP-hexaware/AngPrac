import { Component, OnInit } from '@angular/core';
import {Student} from '../Student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
name : string;
  show(n) {
    this.name=n;
  }
students=[
  new Student("Divya","K","Hyderabad","divya@hexaware.com"),
  new Student("Harshini","pb","Eluru","SaiHarshini@hexaware.com"),
  new Student("Malathi","pb","Hyderabad","malathi@hexaware.com")
]
  constructor() { }

  ngOnInit() {
  }

}
