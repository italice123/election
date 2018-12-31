import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';


const adminRoutes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'', component:LoginComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AdminRoutingModule { }
