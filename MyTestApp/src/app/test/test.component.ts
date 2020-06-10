import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ht-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  nums: number[];

  title = 'test';

  myDivId = 'div1';

  myObj = { name: 'test' };

  getTitle() {
    return this.title;
  }

  onButtonClicked(event: any) {
    console.log(event);
    console.log('CLicked...!!!');
    console.log(this.title);
  }

  onInputChange(event: any) {
    console.log(event);
    this.title = event.target.value;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(' ngOnChanges ..... ');
  }
  ngDoCheck(): void {
    console.log(' ngDoCheck ..... ');
  }
  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit ..... ');
  }
  ngAfterContentChecked(): void {
    console.log(' ngAfterContentChecked ..... ');
  }
  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit ..... ');
  }
  ngAfterViewChecked(): void {
    console.log(' ngAfterViewChecked ..... ');
  }
  ngOnDestroy(): void {
    console.log(' ngOnDestroy ..... ');
  }

  ngOnInit(): void {
    console.log(' ngOnInit ..... ');
    this.nums = [1, 2, 3, 4, 5, 6];
  }
}
