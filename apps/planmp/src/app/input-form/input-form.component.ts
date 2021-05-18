import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'aedigital-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {

  userInformationForm: FormGroup;

  form

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  get invalid(): boolean {
		return this.form.invalid;
	}
  
  get(name: string): AbstractControl {
		return this.form.get(name);
	}

  createForm(){
    this.form = this.formBuilder.group({
      firstName: ['',Validators.required],
      middleName: [''],
      lastName: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      type: ['',Validators.required],
      isTest: ['',Validators.required]
    });
  }
  Submitted() {
    console.log('Your form data : ', this.form.value );
  }

}
