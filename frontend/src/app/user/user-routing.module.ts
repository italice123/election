import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';

const userRoutes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'home', 
    loadChildren:'./home/homeuser.module#HomeuserModule' 
  },
  { path:'', component:LoginComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class UserRoutingModule { }
