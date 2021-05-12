import { CustomerStateService } from '../customer-state.service';
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
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private customerStateService: CustomerStateService
  ) {
    this.createCustomerFormGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      firstAddress: ['', [Validators.required]],
      secondAddress: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      phoneNumber: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        ],
      ],
      mon: ['', [Validators.required]],
      tue: ['', [Validators.required]],
      wed: ['', [Validators.required]],
      thur: ['', [Validators.required]],
      fri: ['', [Validators.required]],
      sat: ['', [Validators.required]],
      sun: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit(form: any) {
    if (this.createCustomerFormGroup.valid) {
      this.customerStateService.addCustomer(this.createCustomerFormGroup.value);
      this.close();
    } else {
      this.createCustomerFormGroup.markAllAsTouched();
    }
  }
  close() {
    this.router.navigate(['']);
  }
}
