import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MatIconModule
  ]
})
export class CatalogueModule { }
