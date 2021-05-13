import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Customer, CustomerState } from '../interfaces/all-interfaces';

export const createDefaultCustomer = (name: string, address: string) => {
  const customer: Customer = {
    name,
    firstAddress: address,
    secondAddress: 'secondAddress',
    postCode: 'postCode',
    phoneNumber: '999888777',
    email: name.replace(" ","_") + '@gmail.com',
    openingTime: {
      mon: '20:23',
      tue: '4:25',
      wed: '10:20',
      thur: '6:10',
      fri: '2:20',
      sat: '9:20',
      sun: '2:40',
    },
  };
  return customer;
};
const defaultCustomers: Customer[] = [
  createDefaultCustomer('Tom & Co', 'De koel, Overpelt'),
  createDefaultCustomer('Tom & Co', 'De koel, Overpelt'),
  createDefaultCustomer('Maxi Zoo Mechelen', 'Oscar van Kesbeekstraat'),
  createDefaultCustomer('Maxi Zoo Mechelen', 'Oscar van Kesbeekstraat'),
  createDefaultCustomer('Maxi Zoo Mechelen', 'Oscar van Kesbeekstraat'),
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
