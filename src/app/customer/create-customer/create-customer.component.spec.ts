import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateCustomerComponent } from './create-customer.component';

describe('CreateCustomerComponent', () => {
  let component: CreateCustomerComponent;
  let fixture: ComponentFixture<CreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCustomerComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      providers: [FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call navigation function when "close" icon is clicked', () => {
    let router = fixture.componentInstance.router;
    spyOn(router, 'navigate');
    const menuItemOptions = fixture.debugElement.queryAll(By.css('.close-icon'));
    menuItemOptions[menuItemOptions.length - 1].nativeElement.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([""]);
  });

  it('should not call addCustomer when submit button is clicked when form is not filled in', () => {
    let customerStateService = fixture.componentInstance.customerStateService;
    fixture.detectChanges();
    spyOn(customerStateService, 'addCustomer');
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    expect(customerStateService.addCustomer).toHaveBeenCalledTimes(0);
  });

  it('should call addCustomer when submit button is clicked when form is valid', () => {
    let customerStateService = fixture.componentInstance.customerStateService;
    let createCustomerFormGroup = fixture.componentInstance.createCustomerFormGroup;
    const name = createCustomerFormGroup.controls['name']
    const firstAddress = createCustomerFormGroup.controls['firstAddress']
    const secondAddress = createCustomerFormGroup.controls['secondAddress']
    const postCode = createCustomerFormGroup.controls['postCode']
    const phoneNumber = createCustomerFormGroup.controls['phoneNumber']
    const email = createCustomerFormGroup.controls['email']
    const mon = createCustomerFormGroup.controls['mon']
    const tue = createCustomerFormGroup.controls['tue']
    const wed = createCustomerFormGroup.controls['wed']
    const thur = createCustomerFormGroup.controls['thur']
    const fri = createCustomerFormGroup.controls['fri']
    const sat = createCustomerFormGroup.controls['sat']
    const sun = createCustomerFormGroup.controls['sun']

    name.setValue("paul")
    firstAddress.setValue("paul")
    secondAddress.setValue("paul")
    postCode.setValue("paul")
    phoneNumber.setValue("paul")
    email.setValue("paul@gmmail.com")
    mon.setValue("paul")
    tue.setValue("paul")
    wed.setValue("paul")
    thur.setValue("paul")
    fri.setValue("paul")
    sat.setValue("paul")
    sun.setValue("paul")

    fixture.detectChanges();
    fixture.detectChanges();
    spyOn(customerStateService, 'addCustomer');
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    expect(customerStateService.addCustomer).toHaveBeenCalledTimes(1);
  });

});
