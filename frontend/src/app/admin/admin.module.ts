import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Admincomponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
    declarations: [ 
        Admincomponent,
        LoginComponent,
        HomeComponent 
    ],
    imports: [ 
        CommonModule,
        AdminRoutingModule
     ],
    providers: [],
    bootstrap: []
  })

  export class AdminModule { }