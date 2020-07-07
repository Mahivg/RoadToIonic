import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { PathLocationStrategy } from '@angular/common';
import { ProductService } from '../products.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ht-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];

    let id = 0;
    this.route.params.subscribe((data) => {
      console.log(data['id']);
      id = data['id'];
      console.log(id);
      this.product = this.productService.getProductById(id);
    });
    console.log(id);
    // this.product = this.productService.getProductById(id);

    // this.http.get('url').pipe().subscribe(data=.)
  }
}
