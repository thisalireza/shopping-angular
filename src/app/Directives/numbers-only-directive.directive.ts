import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {
  private readonly PREFIX = '09';
  private readonly CAPTCHA_LENGTH = 5;
  private readonly MAX_PHONE_LENGTH = 11;

  private readonly isPhoneNumberInput: boolean;
  private readonly isCaptchaInput: boolean;

  constructor(private elementRef: ElementRef) {
    const input = this.elementRef.nativeElement as HTMLInputElement;
    this.isPhoneNumberInput = input.name === 'phoneNumber';
    this.isCaptchaInput = input.name === 'verificationCode';
  }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (this.isCaptchaInput) {
      // CAPTCHA input: allow any characters, limit to 5 characters
      value = value.slice(0, this.CAPTCHA_LENGTH);
    } else if (this.isPhoneNumberInput) {
      // Phone number input: prefix with '09' and allow only numbers
      if (!value.startsWith(this.PREFIX)) {
        value = this.PREFIX + value.replace(/[^0-9]/g, '').slice(0, this.MAX_PHONE_LENGTH - 2);
      }
    } else {
      // Other numeric inputs: allow only numbers
      value = value.replace(/[^0-9]/g, '');
    }

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
    const input = this.elementRef.nativeElement as HTMLInputElement;

    if (this.isCaptchaInput) {
      // CAPTCHA: limit pasted text to 5 characters
      input.value = pastedData.slice(0, this.CAPTCHA_LENGTH);
    } else if (this.isPhoneNumberInput) {
      // Phone number: prefix with '09' and keep only numbers
      const numericData = pastedData.replace(/[^0-9]/g, '');
      input.value = this.PREFIX + numericData.slice(0, this.MAX_PHONE_LENGTH - 2);
    } else {
      // Other inputs: keep only numbers
      const numericData = pastedData.replace(/[^0-9]/g, '');
      input.value = numericData;
    }
  }
}
