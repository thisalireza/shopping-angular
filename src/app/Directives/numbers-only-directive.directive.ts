import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');

    // Ensure exactly 11 digits
    if (input.value.length > 11) {
      input.value = input.value.slice(0, 11);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = this.elementRef.nativeElement as HTMLInputElement;
    if (input.value.length >= 11 && event.key.length === 1) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text');
    const numericData = pastedData.replace(/[^0-9]/g, '');
    const input = this.elementRef.nativeElement as HTMLInputElement;
    input.value = numericData.slice(0, 11);
  }
}
