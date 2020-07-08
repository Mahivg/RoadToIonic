import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean;
  userLogin = new BehaviorSubject<boolean>(false);
  userLoginObserver = this.userLogin.asObservable();

  private userCredentials = [
    {
      userName: 'Test1',
      password: 'Test1212',
    },
    {
      userName: 'Test2',
      password: 'Test1212',
    },
  ];

  validateUserCred(userName: string, password: string) {
    let validUser = false;

    const user = this.userCredentials.find((u) => u.userName == userName);

    if (user) {
      if (user.password == password) {
        validUser = true;
        this.isUserLoggedIn = true;
      }
    }

    return validUser;
  }

  logOut() {
    this.isUserLoggedIn = false;
  }
}
