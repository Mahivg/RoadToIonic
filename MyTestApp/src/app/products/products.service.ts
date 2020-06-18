import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    new Product(1, 'Test 1', 'Test Description 1', 200, ['red', 'blue'], true),
    new Product(2, 'Test 2', 'Test Description 2', 200, ['red', 'blue'], true),
    new Product(3, 'Test 3', 'Test Description 3', 200, ['red', 'blue'], true),
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
