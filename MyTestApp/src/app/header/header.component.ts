import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ht-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //   @Output() onFeatureChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // onMenuChange(menu: string) {
  //   this.onFeatureChange.emit(menu);
  // }
}
