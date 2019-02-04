import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PolperComponent } from './polper/polper.component';
import { CheckelectComponent } from './checkelect/checkelect.component';


const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'polper', component: PolperComponent },
      { path: 'checkelect', component: CheckelectComponent }
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
