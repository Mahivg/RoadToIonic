import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestObj } from '../models/test';
import { SingletonExample } from '../models/Singleton';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('txtUserName', { static: true }) userNameInput: ElementRef;

  @ViewChild('txtPassword', { static: true }) passwordInput: ElementRef;

  users: any[] = [
    {
      name: 'test',
      desc: 'test description 1',
    },
    {
      name: 'test',
      desc: 'test description 1',
    },
    {
      name: 'test',
      desc: 'test description 1',
    },
    {
      name: 'test',
      desc: 'test description 1',
    },
    {
      name: 'test',
      desc: 'test description 1',
    },
    {
      name: 'test',
      desc: 'test description 1',
    },
  ];

  constructor(public singtonObj: SingletonExample) {}

  ngOnInit(): void {
    console.log(TestObj.product);
    console.log(this.singtonObj);
  }

  login() {
    let user = 'sr';
    console.log(user);
    console.log(this.userNameInput.nativeElement.value);
    console.log(this.passwordInput.nativeElement.value);
  }
}
