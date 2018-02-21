import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/Forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { MenuComponent } from './menu/menu.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NameComponent } from './name/name.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    MenuComponent,
    LoginScreenComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      {path:'First',component:FirstComponent},
      {path:'Second',component:SecondComponent},
      {path:'Third',component:ThirdComponent},
      {path:'menu',component:MenuComponent},
      {path:'',component:LoginScreenComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
