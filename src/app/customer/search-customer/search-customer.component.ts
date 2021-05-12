import { CustomerStateService } from '../customer-state.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss'],
})
export class SearchCustomerComponent implements OnInit {
  searchContral = new FormControl('');
  searchData = '';
  customers: any[] = [];
  filteredCustomers: any[] = [];
  private subs = new SubSink();
  constructor(
    public router: Router,
    public customerStateService: CustomerStateService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.customerStateService.allCustomers$.subscribe(
      (res) => {
        this.customers = res;
        this.filteredCustomers = [...this.customers];
        console.log(res);
      }
    );
  }

  createNewCustomer() {
    this.router.navigate(['create-customer']);
  }

  search() {
    if (this.searchData) {
      const filtered = this.customers.filter((customer) => {
        if (
          customer &&
          customer.name &&
          customer.name.toLowerCase().includes(this.searchData.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      this.filteredCustomers = [...filtered];
    } else {
      this.filteredCustomers = [...this.customers];
    }
  }

  viewDetails() {
    this.router.navigate(['view-details']);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
