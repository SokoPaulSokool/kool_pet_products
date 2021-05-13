import { Component, OnInit } from '@angular/core';
import { CustomerStateService } from '../customer-state.service';
import { Customer } from '../../interfaces/all-interfaces';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  selectedCustomer: Customer | null | undefined = null;
  days=[
    "mon",
    "tue",
    "wed",
    "thur",
    "fri",
    "sat",
    "sun",
  ]
  constructor(public customerStateService: CustomerStateService) {

  }



  ngOnInit(): void {
    // selectedCustomer
    this.customerStateService.selectedCustomer$.subscribe((res) => {
      this.selectedCustomer = res;
    });
  }
}
