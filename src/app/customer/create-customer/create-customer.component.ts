import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  createCustomerFormGroup: FormGroup;
  customer = {
    name: '',
    firstAddress: '',
    secondAddress: '',
    ppstCode: '',
    phoneNumber: '',
    email: '',
  };
  constructor(private _formBuilder: FormBuilder, private router: Router) {
    this.createCustomerFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      firstAddress: ['', Validators.required],
      secondAddress: ['', Validators.required],
      ppstCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(form: any) {
    console.log(form);
    console.log(this.customer);
  }
  close() {
   this.router.navigate([''])
  }
}
