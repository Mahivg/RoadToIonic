import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestObj } from '../models/test';
import { SingletonExample } from '../models/Singleton';
import { AuthService } from '../shared/Auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('txtUserName', { static: true }) userNameInput: ElementRef;

  @ViewChild('txtPassword', { static: true }) passwordInput: ElementRef;

  // @ViewChild('loginTDForm', { static: true }) loginTDForm: NgForm;

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

  constructor(
    public singtonObj: SingletonExample,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(TestObj.product);
    console.log(this.singtonObj);
  }

  login(loginTdForm: NgForm) {
    // console.log(this.userNameInput.nativeElement.value);
    // console.log(this.passwordInput.nativeElement.value);

    // const userName = this.userNameInput.nativeElement.value;
    // const password = this.passwordInput.nativeElement.value;

    // const userCred = {
    //   userName: userName,
    //   password: password,
    // };

    // const validUser = this.authService.validateUserCred(userName, password);
    // if (validUser) {
    //   this.authService.userLogin.next(validUser);
    //   this.router.navigateByUrl('/products');
    // } else {
    //   alert('Invalid User credentials..!!');
    // }
    console.log(loginTdForm);
    console.log(loginTdForm.value);
  }
}
