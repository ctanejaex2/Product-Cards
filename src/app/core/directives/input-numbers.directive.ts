import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[inputNumbers]'
})
export class InputNumbersDirective implements OnInit {
  constructor(private el: ElementRef) { }
  val: string = '';

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
      this.val += event.key;
    }
    this.el.nativeElement.value = Number(this.val).toLocaleString('en-IN');
    return false;
  }
  ngOnInit(): void {
    this.val = this.el.nativeElement.value;
  }


}

