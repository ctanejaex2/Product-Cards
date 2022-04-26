import { Injectable } from '@angular/core';
import { product } from 'src/app/model/products';
import { PRODUCTS } from 'src/assets/db-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: product[];
  constructor() {
    this.products = PRODUCTS['arrayOfProducts'];
  }

  getProductById(id: number) {
    return this.products.filter((product: product) => product.id == id);
  }

  getAllProducts() {
    return this.products;
  }
  
  setProductAtId(id: number, updatedProduct: product) {
    this.products[id - 1] = updatedProduct;
  }
}
