import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    new Product(
      1,
      'Test 1',
      'Test Description 1',
      200,
      ['red', 'blue'],
      true,
      './../../assets/products/images1.jpg'
    ),
    new Product(
      2,
      'Test 2',
      'Test Description 2',
      200,
      ['red', 'blue'],
      true,
      ''
    ),
    new Product(
      3,
      'Test 3',
      'Test Description 3',
      200,
      ['red', 'blue'],
      true,
      ''
    ),
  ];

  productAddSubject = new BehaviorSubject<string>('');

  productObserver = this.productAddSubject.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProductById(id: number) {
    this.productAddSubject.next('Product Get ' + id);
    return this.products.find((p) => p.id == id);
  }
}
