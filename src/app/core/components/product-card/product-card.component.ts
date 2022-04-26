import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { product } from 'src/app/model/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [ProductsService]
})

export class ProductCardComponent implements AfterViewInit, OnInit {
  orderby: string = '';

  @Input() product?: product;
  @Input() totalProducts: number = 0;
  @Output() positionSelection = new EventEmitter<number>();
  @Output() priceRangeEvent = new EventEmitter<string>();
  @ViewChild('positionSelector') positionSelector?: ElementRef;
  @ViewChild('productName') elemenetProductName?: ElementRef;
  @ViewChild('editProductDetails') btnEditProductDetails?: ElementRef;
  @ViewChild('productImage') elemenetProductImage?: ElementRef;
  @ViewChild('productPrice') elemenetProductPrice?: ElementRef;
  @ViewChild('productCard') productCard?: ElementRef;

  ngOnInit(): void {

    this.product = this.route.snapshot.data['products'];


    // if (this.isIdParams()) {
    //   this.getAndSetCurrentProduct();
    // }
  }


  getAndSetCurrentProduct() {
    let currProductId = this.getCurrProductId();
    const selectedProduct = this.productService.getProductById(currProductId);
    if (selectedProduct.length > 0) this.product = selectedProduct[0];
    else this.router.navigate(['/404'])
  }

  getCurrProductId() {
    let productId = 0;
    this.route.params.subscribe((params: Params) => {
      productId = params['productId'];
    });
    return productId;
  }

  isIdParams() {
    let isIdParam = false;
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty('productId')) {
        isIdParam = true;
      }
    })
    return isIdParam;
  }

  onPositionSelected(event: any, positionSelector: any) {
    this.positionSelection.emit(event.target.value - 1);
    positionSelector.selectedIndex = 0;
  }




  ngAfterViewInit(): void {

    if (this.isIdParams()) {
      const el = document.createElement('button');
      el.textContent = 'Save';

      el.addEventListener('click', () => {
        this.updateProduct();
      })
      this.elemenetProductName?.nativeElement.setAttribute('contenteditable', 'true');
      this.createPositionOptions(this.totalProducts);
      this.productCard?.nativeElement.appendChild(el);

      this.productCard?.nativeElement.removeChild(this.btnEditProductDetails?.nativeElement);
    }
  }

  updateProduct() {
    const currProductId = this.getCurrProductId();
    const updatedProduct = {} as product;
    updatedProduct.id = currProductId;
    updatedProduct.price = this.elemenetProductPrice?.nativeElement.value;
    updatedProduct.imgUrl = this.elemenetProductImage?.nativeElement.src;
    updatedProduct.name = this.elemenetProductName?.nativeElement.textContent;
    this.productService.setProductAtId(currProductId, updatedProduct);

    this.router.navigate(["/products"]);
  }



  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router) { }


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

