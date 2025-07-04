// captcha.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CaptchaService} from "../../services/captcha.service";
import {NgIf, NgStyle} from "@angular/common";
import {CaptchaInputDirective} from "../../Directives/captcha-input.directive";

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    CaptchaInputDirective,
    NgStyle
  ],  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.scss',
})
export class CaptchaComponent implements OnInit {
  @Input() challenge: { operation: string, num1: number, num2: number } = { operation: '', num1: 0, num2: 0 };
  @Output() onAnswer = new EventEmitter<boolean>();

  userAnswer = '';
  showResult = false;
  isCorrect = false;

  constructor(private captchaService: CaptchaService) {}

  ngOnInit(): void {
    this.generateNewChallenge();
  }

  generateNewChallenge(): void {
    this.challenge = this.captchaService.generateChallenge();
    this.userAnswer = '';
    this.showResult = false;
    this.isCorrect = false;
    this.onAnswer.emit(false);
  }

  checkAnswer(): void {
    this.isCorrect = this.captchaService.verifyAnswer(this.challenge, this.userAnswer);
    this.showResult = true;
    this.onAnswer.emit(this.isCorrect);
  }

  public reset(): void {
    this.generateNewChallenge();
  }

}
