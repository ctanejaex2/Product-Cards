import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DisplayImagesComponent } from './components/display-images/display-images.component';
import { ImagefilterComponent } from './components/imagefilter/imagefilter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductNotFoundComponent } from './components/product-not-found/product-not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { InputNumbersDirective } from './directives/input-numbers.directive';
import { ImagesService } from './services/images.service';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCardListComponent,
    InputNumbersDirective,
    ProductNotFoundComponent,
    ImagefilterComponent,
    PaginationComponent,
    DisplayImagesComponent,
  ],
  providers: [
    ImagesService
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ], exports: [
    ProductCardComponent,
    ProductCardListComponent
  ]
})
export class CoreModule { }
