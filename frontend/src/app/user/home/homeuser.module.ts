import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { PolperComponent } from './polper/polper.component';
import { CheckelectComponent } from './checkelect/checkelect.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    PolperComponent, 
    CheckelectComponent
  ]
})
export class HomeuserModule { }
