import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'ht-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  product: Product;

  @ViewChild('txtProductName', { static: true }) txtProductName: ElementRef;

  @ViewChild('txtProductDesc', { static: true }) txtProductDesc: ElementRef;

  @ViewChild('txtProductPrice', { static: true }) txtProductPrice: ElementRef;

  @ViewChild('txtProductColors', { static: true })
  txtProductColors: ElementRef;

  @ViewChild('txtProductStatus', { static: true })
  txtProductStatus: ElementRef;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct() {
    const pName = this.txtProductName.nativeElement.value;
    const pDesc = this.txtProductDesc.nativeElement.value;
    const pPrice = this.txtProductPrice.nativeElement.value;
    const pColors = this.txtProductColors.nativeElement.value;
    const pStatus = this.txtProductStatus.nativeElement.checked;
    const pId = this.productService.getProducts().length + 1;

    const newProduct = new Product(pId, pName, pDesc, pPrice, pColors, pStatus);

    this.productService.addProduct(newProduct);
  }
}
