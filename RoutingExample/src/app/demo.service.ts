import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

  constructor() { }
  sayHello() : string {
    return "Welcome to services..";
  }
  company() : string {
    return "Hexaware...";
  }
  topic() : string {
    return "Angular4";
  }

}
