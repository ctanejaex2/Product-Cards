import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductIdResolver implements Resolve<boolean> {

  constructor(private productService: ProductsService) {
    console.log('helllo');

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

    const currProductId = route.params['id'];
    let selectedProduct = this.productService.getProductById(currProductId)[0];
    return Promise.resolve(selectedProduct);

  }
}
