import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainServicesComponent } from './pages/main-services/main-services.component';
import { ServiceComponent } from './pages/service/service.component';
import { MainServicesRoutingModule } from './main-services-routing.module';
import { HighDescriptionCardsComponent } from './components/high-description-cards/high-description-cards.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material/material.module';

@NgModule({
    declarations: [
        MainServicesComponent,
        ServiceComponent,
        HighDescriptionCardsComponent
    ],
    imports: [
        CommonModule,
        MainServicesRoutingModule,
        MaterialModule,
        SharedModule
        
    ]
})
export class MainServicesModule { }
