import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    AboutUsRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AboutUsModule { }
