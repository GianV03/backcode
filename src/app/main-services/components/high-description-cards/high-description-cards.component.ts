import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../../pages/service/service.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'main-services-high-description-cards',
  templateUrl: './high-description-cards.component.html',
  styleUrls: ['./high-description-cards.component.css']
})
export class HighDescriptionCardsComponent implements OnInit {
  constructor(
    private matDialog: MatDialog
  ){
    
  }
  ngOnInit(): void {

  }

  openService(service:string): void{

    // opens dialog to contact about service
    const dialogRef = this.matDialog.open(ServiceComponent,{
      width:'450px',
      height:'500px',
      data:{
        service: service
      }
    });
  }
}
