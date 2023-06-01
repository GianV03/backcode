import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  contactForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ){

  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(){

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


}
