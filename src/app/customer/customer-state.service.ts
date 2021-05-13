import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Customer, CustomerState } from '../interfaces/all-interfaces';

const createDefaultCuatomer = (name: string, address: string) => {
  const customer: Customer = {
    name,
    firstAddress: address,
    secondAddress: 'secondAddress',
    postCode: 'postCode',
    phoneNumber: '999888777',
    email: name + '@gmail.com',
    openingTime: {
      mon: '20:20',
      tue: '20:20',
      wed: '20:20',
      thur: '20:20',
      fri: '20:20',
      sat: '20:20',
      sun: '20:20',
    },
  };
  return customer;
};
const defaultCustomers: Customer[] = [
  createDefaultCuatomer('Tom & Co', 'De koel, Overpelt'),
  createDefaultCuatomer('Tom & Co', 'De koel, Overpelt'),
  createDefaultCuatomer('Maxi Zoo Mechelen', 'Oscar van Kesbeekstraat'),
  createDefaultCuatomer('Maxi Zoo Mechelen', 'Oscar van Kesbeekstraat'),
  createDefaultCuatomer('Maxi Zoo Mechelen', 'Oscar van Kesbeekstraat'),
];

const initialState: CustomerState = {
  allCutomers: [...defaultCustomers],
  selectedCustomer: null,
};

@Injectable({
  providedIn: 'root',
})
export class CustomerStateService extends StateService<CustomerState> {
  constructor() {
    super(initialState);
  }

  allCustomers$: Observable<Customer[]> = this.select((state) => {
    return state.allCutomers;
  });

  selectedCustomer$: Observable<Customer | null | undefined> = this.select(
    (state) => {
      return state.selectedCustomer;
    }
  );

  addCustomer(newCustomer: Customer) {
    this.setState({
      allCutomers: [newCustomer, ...this.state.allCutomers],
    });
  }
  setSelectedCustomer(customer: Customer | null) {
    this.setState({
      selectedCustomer: customer,
    });
  }
}
