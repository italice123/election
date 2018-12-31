import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Usercomponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
    declarations: [ 
        Usercomponent,
        LoginComponent,
        HomeComponent, 
    ],
    imports: [ 
        CommonModule,
        UserRoutingModule
     ],
    providers: [],
    bootstrap: []
  })

  export class UserModule { }