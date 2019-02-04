import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PartyComponent } from './party/party.component';
import { PersonalComponent } from './personal/personal.component';
import { ErrorComponent } from 'src/app/error/error.component';

const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
      { path: 'party', component: PartyComponent },
      { path: 'personal', component: PersonalComponent },
    //   { path: '',
    //   children: [
    //     { path: '', component: ErrorComponent }
    //   ]
    // },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
