import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestObj } from '../models/test';
import { SingletonExample } from '../models/Singleton';
import { AuthService } from '../shared/Auth.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

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

  loginFG: FormGroup;

  constructor(
    public singtonObj: SingletonExample,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(TestObj.product);
    console.log(this.singtonObj);

    this.loginFG = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl(''),
    });
  }

  login(loginTdForm: any) {
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

    // Using Template Driven Fomr

    // console.log(loginTdForm);
    // console.log(loginTdForm.value);
    // const userCred = loginTdForm.value;

    // const validUser = this.authService.validateUserCred(
    //   userCred.userName,
    //   userCred.password
    // );
    // if (validUser) {
    //   this.authService.userLogin.next(validUser);
    //   this.router.navigateByUrl('/products');
    // } else {
    //   alert('Invalid User credentials..!!');
    // }

    // Using Reactive Form

    console.log(this.loginFG);
    console.log(this.loginFG.value);

    const userCred = this.loginFG.value;

    const validUser = this.authService.validateUserCred(
      userCred.userName,
      userCred.password
    );
    if (validUser) {
      this.authService.userLogin.next(validUser);
      this.router.navigateByUrl('/products');
    } else {
      alert('Invalid User credentials..!!');
    }
  }
}
