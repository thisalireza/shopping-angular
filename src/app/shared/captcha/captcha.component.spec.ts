// captcha.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import {NumbersOnlyDirective} from "../../Directives/numbers-only-directive.directive";

@Component({
  template: `
    <input type="text" numbersOnly>
  `
})
class TestComponent {}

describe('NumbersOnlyDirective', () => {
  let directive: NumbersOnlyDirective;
  let input: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NumbersOnlyDirective]
    });

    const fixture = TestBed.createComponent(TestComponent);
    input = fixture.nativeElement.querySelector('input');
    directive = TestBed.inject(NumbersOnlyDirective);
  });

  it('should only allow numbers', () => {
    input.value = 'abc123';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('123');
  });

  it('should limit to 11 digits', () => {
    input.value = '123456789012345';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('12345678901');
  });

  it('should prevent paste of non-numeric text', () => {
    const clipboardData = new DataTransfer();
    clipboardData.setData('text', 'abc123def');
    const event = new ClipboardEvent('paste', { clipboardData });
    input.dispatchEvent(event);
    expect(input.value).toBe('123');
  });
});
