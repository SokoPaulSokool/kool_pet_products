import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/all-interfaces';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  catalogue: any = [];
  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < 100; index++) {
      this.catalogue.push(this.createProduct(index));
    }
  }

  createProduct(position: number): Product {
    const rand = this.getRndInteger(4, 45);
    const rand2 = this.getRndInteger(1, 3);
    const rand3 = this.getRndInteger(200, 1000);
    const rand4 = this.getRndInteger(1, 4);
    const product: Product = {
      id: rand4,
      name: `Grijis TARS${rand3}`,
      dimesions: `s ${rand} x ${rand2 * 2} x 20 cm`,
      price: `€ ${rand3}`,
      count: Math.round(rand / rand2),
      total: rand,
    };
    return product;
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
