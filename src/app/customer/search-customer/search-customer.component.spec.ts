import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchCustomerComponent } from './search-customer.component';

describe('SearchCustomerComponent', () => {
  let component: SearchCustomerComponent;
  let fixture: ComponentFixture<SearchCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchCustomerComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one input and one button', () => {
    fixture.detectChanges();
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(inputs.length).toEqual(1);
    expect(buttons.length).toEqual(1);
  });

  it('should start with five sample customers', () => {
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.customers.length).toEqual(5);
  });

  it('should call "createNewCustomer()" when button is clicked', () => {
    spyOn(component, 'createNewCustomer');
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    expect(component.createNewCustomer).toHaveBeenCalled();
    expect(component.createNewCustomer).toHaveBeenCalledWith();
  });

  it('should call router.navigate function with "create-customer" when "button" is clicked', () => {
    let router = fixture.componentInstance.router;
    spyOn(router, 'navigate');
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['create-customer']);
  });

  it('should call "search()" when input keyup', () => {
    spyOn(component, 'search');
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    inputs[0].triggerEventHandler('keyup', {});
    fixture.detectChanges();
    expect(component.search).toHaveBeenCalled();
    expect(component.search).toHaveBeenCalledWith();
  });

  it('should return all customers when searched with no search data', () => {
    component.searchData = '';
    component.customers = [{ name: 'paul' }, { name: 'samuel' }];
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    inputs[0].triggerEventHandler('keyup', {});
    fixture.detectChanges();
    expect(component.filteredCustomers.length).toEqual(
      component.customers.length
    );
  });

  it('should return the customer with name containing the search data ', () => {
    component.searchData = 'p';
    component.customers = [{ name: 'paul' }, { name: 'samuel' }];
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    inputs[0].triggerEventHandler('keyup', {});
    fixture.detectChanges();
    expect(component.filteredCustomers.length).toEqual(1);
  });

  it('should return no customer the search data is not part of any names ', () => {
    component.searchData = 'q';
    component.customers = [{ name: 'paul' }, { name: 'samuel' }];
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    inputs[0].triggerEventHandler('keyup', {});
    fixture.detectChanges();
    expect(component.filteredCustomers.length).toEqual(0);
  });

  it('should call router.navigate to "view-details" function when "location" icon is clicked', () => {
    let router = fixture.componentInstance.router;
    component.filteredCustomers = [{ name: 'paul' }, { name: 'samuel' }];
    fixture.detectChanges();
    spyOn(router, 'navigate');
    const locationIcons = fixture.debugElement.queryAll(By.css('.input-icon'));
    locationIcons[0].nativeElement.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['view-details']);
  });
});
