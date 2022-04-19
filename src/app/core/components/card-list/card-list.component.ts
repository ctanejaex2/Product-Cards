import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/assets/db-data';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  products = PRODUCTS['arrayOfProducts'];
  priceRange: string = '';

  constructor() { }


  onPositionChanged(currentPosition: number, selectedPosition: any) {
    let product = this.products[currentPosition];
    this.products.splice(currentPosition, 1);
    this.products.splice(selectedPosition, 0, product);
  }

  setPriceRange(priceRange: any) {
    this.priceRange = priceRange;
  }


}
