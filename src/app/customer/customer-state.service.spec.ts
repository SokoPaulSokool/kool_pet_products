import { TestBed } from '@angular/core/testing';

import { CustomerStateService, createDefaultCustomer } from './customer-state.service';

describe('CustomerStateService', () => {
  let service: CustomerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase number of customers when addCustomer is called', () => {
    service.addCustomer(createDefaultCustomer("test","location"))
    service.allCustomers$.subscribe(res=>{
      expect(res.length).toEqual(6);
    })
  });
});
