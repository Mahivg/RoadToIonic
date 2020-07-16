import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingletonExample } from './models/Singleton';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from './shared/AuthGaurd';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [{ path: ':id', component: ProductDetailComponent }],
  }, // Route { id: 1 }canActivate: [AuthGaurd],
  { path: 'users', component: UsersComponent, canActivate: [AuthGaurd] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // Wild route
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    UsersComponent,
    ProductDetailComponent,
    ProductAddComponent,
    UserDetailComponent,
    FooterComponent,
    HeaderComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [SingletonExample], // => new SingletonEXmaple() => pass the instance
  bootstrap: [AppComponent],
})
export class AppModule {}
