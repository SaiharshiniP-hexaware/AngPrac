import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {

sayHello() {
  alert("welcome to events");
}
course() {
  alert("Angular training");
}

constructor() { }
  ngOnInit() {
  }

}
