import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('txtUserName', { static: true }) userNameInput: ElementRef;

  @ViewChild('txtPassword', { static: true }) passwordInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.userNameInput.nativeElement.value);
    console.log(this.passwordInput.nativeElement.value);
  }
}
