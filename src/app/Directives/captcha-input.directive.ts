import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[captchaInput]'
})
export class CaptchaInputDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Allow only numbers
    value = value.replace(/[^0-9]/g, '');

    input.value = value;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = this.elementRef.nativeElement as HTMLInputElement;

    // Allow navigation keys
    if (event.key === 'Backspace' || event.key === 'Delete' ||
      event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      return;
    }

    // Allow only number keys
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text');
    const numericData = pastedData.replace(/[^0-9]/g, '');
    const input = this.elementRef.nativeElement as HTMLInputElement;
    input.value = numericData;
  }
}
