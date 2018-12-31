import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Admincomponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [ 
        Admincomponent,
        LoginComponent,
        HomeComponent 
    ],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: []
  })

  export class AdminModule { }