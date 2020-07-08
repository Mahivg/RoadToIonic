import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { AuthService } from '../shared/Auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ht-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  //   @Output() onFeatureChange = new EventEmitter<string>();

  isUserLoggedIn: boolean;

  userLoginSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userLoginSubscription = this.authService.userLoginObserver.subscribe(
      (data) => {
        this.isUserLoggedIn = data;
      }
    );
  }

  logout() {
    this.isUserLoggedIn = false;
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

  // onMenuChange(menu: string) {
  //   this.onFeatureChange.emit(menu);
  // }

  ngOnDestroy() {
    this.userLoginSubscription.unsubscribe();
  }
}
