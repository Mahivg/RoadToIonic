import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'ht-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  // click =>

  @Output() callParentEvent = new EventEmitter<string>(); // custom event like click

  myObj: { name: string; age: number };

  title = 'ProductsComponent';

  constructor() {}

  ngOnInit(): void {}

  callParent() {
    this.callParentEvent.emit('From Products Component..!!!');

    // $event => From Products Component..!!!
  }
}
