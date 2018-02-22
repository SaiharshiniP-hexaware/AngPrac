import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/Forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import {HttpModule} from '@angular/http';
import { MenuComponent } from './menu/menu.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NameComponent } from './name/name.component';
import {DemoService} from './demo.service';
import {UserService} from './user.service';
import {EmployeeService} from './employee.service';
import { UserShowComponent } from './user-show/user-show.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployComponent } from './show-employ/show-employ.component';
import { ShowManagerComponent } from './show-manager/show-manager.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    MenuComponent,
    LoginScreenComponent,
    NameComponent,
    UserShowComponent,
    EmployeeComponent,
    ShowEmployComponent,
    ShowManagerComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
      {path:'First',component:FirstComponent},
      {path:'Second',component:SecondComponent},
      {path:'Third',component:ThirdComponent},
      {path:'menu',component:MenuComponent},
      {path:'ShowEmp',component:ShowEmployComponent},
      {path:'users',component:UserShowComponent},
      {path:'Employee',component:EmployeeComponent},
      {path:'Login',component:LoginScreenComponent},
      {path:'',component:ShowManagerComponent}
    ])
  ],
  providers: [DemoService,UserService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
