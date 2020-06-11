import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'ht-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RoadToIonic';
  showTest = true;
  myId = 'MyId';

  feature: string;

  appProducts: Product[];

  @ViewChild('testDiv', { static: true }) containerDiv: any;

  ngOnInit() {
    this.feature = 'login';
    this.appProducts = [
      new Product(
        1,
        'Test 1',
        'Test Description 1',
        200,
        ['red', 'blue'],
        true
      ),
      new Product(
        2,
        'Test 2',
        'Test Description 2',
        200,
        ['red', 'blue'],
        true
      ),
      new Product(
        3,
        'Test 3',
        'Test Description 3',
        200,
        ['red', 'blue'],
        true
      ),
    ];

    console.log(this.containerDiv);
  }

  onChildEmit(event: any) {
    console.log(event);
  }

  changeFeature(myFeature: string) {
    this.feature = myFeature;
  }
}
