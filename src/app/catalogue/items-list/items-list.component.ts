import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  catalogue:any = [];
  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < 100; index++) {
      this.catalogue.push("")

    }
  }
}
