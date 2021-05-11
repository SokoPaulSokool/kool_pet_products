import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {
  searchContral =  new FormControl('');
  searchData =  "";
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.searchData)
  }
}
