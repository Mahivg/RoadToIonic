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
    this.appProducts = [];

    console.log(this.containerDiv);
  }

  onChildEmit(event: any) {
    console.log(event);
  }

  changeFeature(myFeature: string) {
    this.feature = myFeature;
  }
}
