import { Directive, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[inputNumbers]'
})
export class InputNumbersDirective {
  @Input() allowNumbers: boolean = true;
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) return true;
    return false;
  }
}

