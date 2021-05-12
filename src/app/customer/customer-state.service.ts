import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface CustomerState {
  allCutomers: any[];
}

const initialState: CustomerState = {
  allCutomers: [],
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
      allCutomers: [...this.state.allCutomers, newCustomer],
    });
  }
}
