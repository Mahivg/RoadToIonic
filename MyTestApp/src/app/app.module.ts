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
import { FormsModule } from '@angular/forms';
import { SingletonExample } from './models/Singleton';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
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
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SingletonExample], // => new SingletonEXmaple() => pass the instance
  bootstrap: [AppComponent],
})
export class AppModule {}
