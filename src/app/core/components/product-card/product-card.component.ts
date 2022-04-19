import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { product } from 'src/app/model/products';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements AfterViewInit {


  @Input() product?: product;
  @Input() totalProducts: number = 0;
  @ViewChild('positionSelector') positionSelector?: ElementRef;
  @Output() positionSelection = new EventEmitter<number>();
  @Output() priceRangeEvent = new EventEmitter<string>();

  priceRange: string = '';


  onPositionSelected(event: any, positionSelector: any) {
    this.positionSelection.emit(event.target.value - 1);
    positionSelector.selectedIndex = 0;
  }





  ngAfterViewInit(): void {
    this.createPositionOptions(this.totalProducts);
  }



  createPositionOptions(totalOptions: number) {
    const defaultPosition = document.createElement('option');
    defaultPosition.setAttribute('value', 'default');
    defaultPosition.textContent = 'default';
    this.positionSelector?.nativeElement.appendChild(defaultPosition);

    for (let i = 1; i <= totalOptions; i++) {
      const option = document.createElement('option');
      option.setAttribute('value', `${i}`);
      option.textContent = `${i}`;
      this.positionSelector?.nativeElement.appendChild(option);
    }
  }
}