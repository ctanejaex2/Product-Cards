import { Component } from '@angular/core';
import { PRODUCTS } from 'src/assets/db-data';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent {
  products;
  priceRange: string = '';

  constructor(private productService: ProductsService) {
    this.products = this.productService.getAllProducts();
   }


  onPositionChanged(currentPosition: number, selectedPosition: any) {
    let product = this.products[currentPosition];
    this.products.splice(currentPosition, 1);
    this.products.splice(selectedPosition, 0, product);
  }

  setPriceRange(priceRange: any) {
    this.priceRange = priceRange;
  }
}
