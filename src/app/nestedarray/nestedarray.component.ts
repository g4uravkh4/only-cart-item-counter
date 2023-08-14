import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nestedarray',
  templateUrl: './nestedarray.component.html',
  styleUrls: ['./nestedarray.component.css'],
})
export class NestedarrayComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.emailForm = this.formBuilder.group({
      emails: this.formBuilder.array([this.createEmailControl()]),
    });
  }

  // Helper function to create a form control for an email address
  createEmailControl(): FormGroup {
    return this.formBuilder.group({
      address: ['', [Validators.required, Validators.email]],
    });
  }

  get emailsFormArray(): FormArray {
    return this.emailForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emailsFormArray.push(this.createEmailControl());
  }

  removeEmail(index: number) {
    this.emailsFormArray.removeAt(index);
  }

  onSubmit() {
    // Process the submitted data here
    console.log(this.emailForm.value);
  }
}
