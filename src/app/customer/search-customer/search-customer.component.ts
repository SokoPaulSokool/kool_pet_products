import { CustomerStateService } from '../customer-state.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss'],
})
export class SearchCustomerComponent implements OnInit {
  searchContral = new FormControl('');
  searchData = '';
  constructor(
    private router: Router,
    private customerStateService: CustomerStateService
  ) {}

  ngOnInit(): void {
    this.customerStateService.allCustomers$.subscribe((ll) => {});
  }

  submit() {
    console.log(this.searchData);
    this.router.navigate(['create-customer']);
  }
}
