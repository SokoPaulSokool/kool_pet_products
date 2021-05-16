import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/all-interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input('product') product: Product = {
    id: 0,
    name: '',
    dimesions: '',
    price: '',
    count: 0,
    total: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
