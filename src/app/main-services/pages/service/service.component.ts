import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'main-services-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public service:string ='';
  constructor(
    public dialogRef: MatDialogRef<ServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){

  }
  ngOnInit(): void {
    this.service = this.data.service;
  }

  send(){
      // message sending simulation (temporal)
    Swal.fire({
      icon:'success',
      title:'Se ha enviado exitosamente',
      width: '250px',
      confirmButtonColor:'#8318b4'
    }).then(
      (result)=>{
        this.dialogRef.close();
      }
    )
  }

}


