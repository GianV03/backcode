import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MailService } from '../shared/services/mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  contactForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private mailService: MailService
  ){

  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }


  initForm():FormGroup{
    return this.formBuilder.group({
      name:['', [Validators.required]],
      lastName:['', [Validators.required]],
      phone:['', [Validators.required]],
      mail:['', [Validators.required, Validators.email]],
      comment:['', [Validators.required]],
    })
  }

  onSubmit(){

    let formData:FormData = this.contactForm.value;

    this.mailService.sendMessage(formData)
    .subscribe(
      (response)=>{
        Swal.fire({
          icon:'success',
          title:'Se ha enviado exitosamente',
          width: '250px',
          confirmButtonColor:'#8318b4'
        })
      },
      (error)=>{
        Swal.fire({
          icon:'success',
          title:'Se ha enviado exitosamente',
          width: '250px',
          confirmButtonColor:'#8318b4'
        })
      }
    )

  }


}
