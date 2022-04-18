import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
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

  onPositionSelected(event: any) {
    this.positionSelection.emit(event.target.value - 1);
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.createPositionOptions(this.totalProducts);
  }

  createPositionOptions(totalOptions: number) {
    const defaultPosition = document.createElement('option');
    defaultPosition.setAttribute('value', 'default');
    defaultPosition.textContent = 'default';
    this.positionSelector?.nativeElement.appendChild(defaultPosition);

    for (let i = 1; i <= this.totalProducts; i++) {
      const option = document.createElement('option');
      option.setAttribute('value', `${i}`);
      option.textContent = `${i}`;
      this.positionSelector?.nativeElement.appendChild(option);
    }
  }
}