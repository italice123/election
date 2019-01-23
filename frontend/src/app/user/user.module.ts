import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Usercomponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeuserModule } from './home/homeuser.module';



@NgModule({
    declarations: [ 
        Usercomponent,
        LoginComponent, 
    ],
    imports: [ 
        CommonModule,
        UserRoutingModule,
        HomeuserModule
     ],
    providers: [],
    bootstrap: []
  })

  export class UserModule { }