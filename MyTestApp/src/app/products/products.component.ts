import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { TestObj } from '../models/test';
import { SingletonExample } from '../models/Singleton';

@Component({
  selector: 'ht-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  // click =>

  // @Output click = new EventEmitter<MouseEvent>();

  @Output() callParentEvent = new EventEmitter<string>(); // custom event like click

  myObj: { name: string; age: number };

  title = 'ProductsComponent';

  prod1: Product;

  prod2: Product;

  sng: SingletonExample;

  constructor(singleTon: SingletonExample) {
    this.sng = singleTon;
  }

  ngOnInit(): void {
    // TestObj.product = new Product(1, 'Prod 1', 'test 1', 10, [], true);

    // this.prod1 = new Product(1, 'Prod 1', 'test 1', 10, [], true);

    // this.prod2 = new Product(2, 'Prod 2', 'test 2', 10, [], true);

    // console.log(this.prod1);
    // console.log(this.prod2);

    // console.log('TestObj');

    // console.log(TestObj.product);
    // // this.prod1.id = 2;
    // // this.prod2.id = 1;
    // // console.log(this.prod1);
    // // console.log(this.prod2);

    // this.prod1 = this.prod2;
    // console.log(this.prod1);
    // console.log(this.prod2);
    // this.prod2.name = 'changed';

    // console.log(this.prod1);
    // console.log(this.prod2);

    // this.sng = new SingletonExample();
    console.log(this.sng);
    this.sng.product = new Product(1, 'Prod 1', 'test 1', 10, [], true);
  }

  callParent() {
    this.callParentEvent.emit('From Products Component..!!!');

    // $event => From Products Component..!!!
  }
}
