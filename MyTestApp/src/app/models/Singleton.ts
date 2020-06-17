import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class SingletonExample {
  id: number = 0;

  name: string = 'default';

  product: Product;
}
