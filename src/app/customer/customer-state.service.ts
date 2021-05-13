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
    email: 'email',
    openingTime: {
      mon: '',
      tue: '',
      wed: '',
      thur: '',
      fri: '',
      sat: '',
      sun: '',
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
};

@Injectable({
  providedIn: 'root',
})
export class CustomerStateService extends StateService<CustomerState> {
  constructor() {
    super(initialState);
  }

  allCustomers$: Observable<any[]> = this.select((state) => {
    return state.allCutomers;
  });

  addCustomer(newCustomer: any) {
    this.setState({
      allCutomers: [newCustomer,...this.state.allCutomers],
    });
  }
}
