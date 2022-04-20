import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { InputNumbersDirective } from './directives/input-numbers.directive';



@NgModule({
  declarations: [
    ProductCardComponent,
    CardListComponent,
    InputNumbersDirective
  ],
  imports: [
    CommonModule
  ], exports: [
    ProductCardComponent,
    CardListComponent
  ]
})
export class CoreModule { }
