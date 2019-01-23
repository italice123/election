import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Admincomponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeModule } from './home/home.module';



@NgModule({
    declarations: [ 
        Admincomponent,
        LoginComponent, 
    ],
    imports: [ 
        CommonModule,
        AdminRoutingModule,
        HomeModule
     ],
    providers: [],
    bootstrap: []
  })

  export class AdminModule { }