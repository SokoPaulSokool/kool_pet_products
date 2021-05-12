import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchCustomerComponent,
  },
  {
    path: 'create-customer',
    component: CreateCustomerComponent,
  }, {
    path: 'view-details',
    component: ViewDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
