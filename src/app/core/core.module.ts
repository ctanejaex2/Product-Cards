import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ProductCardComponent,
    CardListComponent
  ]
})
export class CoreModule { }
