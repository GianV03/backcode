import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainImageComponent } from './components/main-image/main-image.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MainImageComponent
  ]
})
export class SharedModule { }
