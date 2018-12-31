import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Usercomponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [ 
        Usercomponent,
        LoginComponent,
        HomeComponent 
    ],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: []
  })

  export class UserModule { }