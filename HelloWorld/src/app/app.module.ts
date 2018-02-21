import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ExampleComponent } from './example/example.component';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule } from '@angular/forms';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { CalcComponent } from './calc/calc.component';
import { DropDownExampleComponent } from './drop-down-example/drop-down-example.component';
import { NameDropDownComponent } from './name-drop-down/name-drop-down.component';
import { LoginComponent } from './login/login.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { StudentComponent } from './student/student.component';
const appRoutes : Routes = [
  {path:'Calc',component:CalcComponent},
  {path:'Login',component:LoginComponent},
  {path:'NameDropDown',component:NameDropDownComponent},
  {path:'Student',component:StudentComponent},
  {path:'DropDownExample',component:DropDownExampleComponent},
  {path:'ButtonDemo',component:ButtonDemoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ExampleComponent,
    ButtonDemoComponent,
    CalcComponent,
    DropDownExampleComponent,
    NameDropDownComponent,
    LoginComponent,
    FormsDemoComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
