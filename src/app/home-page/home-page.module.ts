import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ShortDescriptionComponent } from './components/short-description/short-description.component';
import { BigCardsComponent } from './components/big-cards/big-cards.component';
import { TransparentCardsComponent } from './components/transparent-cards/transparent-cards.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BannersComponent } from './components/banners/banners.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    ShortDescriptionComponent,
    BigCardsComponent,
    TransparentCardsComponent,
    ProjectsComponent,
    BannersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
