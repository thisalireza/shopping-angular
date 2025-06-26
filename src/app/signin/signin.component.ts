import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Location, NgIf} from '@angular/common'
import {NumbersOnlyDirective} from "../Directives/numbers-only-directive.directive";
import {FormsModule, NgForm, NgModel} from "@angular/forms";
import {CaptchaComponent} from "../shared/captcha/captcha.component";
import {RouterLink} from "@angular/router";
import {LocalStorageService} from "../services/local-storage.service";
import {AuthStatusService} from "../services/auth-status.service";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NumbersOnlyDirective, NgIf, FormsModule, CaptchaComponent, RouterLink,],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  @ViewChild('captchaComponent') captchaComponent!: CaptchaComponent;
  @ViewChild('verificationCodeInput') verificationCodeInput!: NgModel;
  phoneNumber = '09';
  isCaptchaValid = false;
  showCodeInput = false;
  verificationCode = '';
  showPhoneNumberSection = true;
  isPhoneNumberDisabled = false;
  showCaptcha = true;
  showContinueButton = true;
  @Input() isVerificationCodeValid = false;

  constructor(private location: Location, private localStorageService: LocalStorageService, private authStatusService: AuthStatusService) {
  }

  ngOnInit(): void {
    // بازیابی وضعیت از localStorage در هنگام بارگذاری کامپوننت
    this.isVerificationCodeValid = this.localStorageService.getVerificationStatus();
  }

  getBack(): void {
    this.location.back();
  }

  generateNewCaptcha(): void {
    if (this.captchaComponent) {
      this.captchaComponent.reset();
    }
  }

  checkCaptcha(isValid: boolean): void {
    this.isCaptchaValid = isValid;
  }

  onSubmit(phoneNumberForm: NgForm): void {
    if (phoneNumberForm.valid && this.isCaptchaValid) {
      this.showCodeInput = true;
      this.showPhoneNumberSection = false;
      this.isPhoneNumberDisabled = true;
      this.showCaptcha = false;
      this.showContinueButton = false;
      this.captchaComponent.reset();
    }
  }

  verifyCode(): void {
    const correctCode = '12345';

    // بررسی اعتبار کد
    if (this.verificationCode.length === 5 && this.verificationCode === correctCode) {
      this.isVerificationCodeValid = true;
    } else {
      this.isVerificationCodeValid = false;
      this.localStorageService.setVerificationStatus(false);
    }
  }

  onClickSubmit(): void {
    if (this.isVerificationCodeValid) {
      this.localStorageService.setVerificationStatus(true);
      this.authStatusService.login(); // نمایش دکمه خروج
    } else {
      this.localStorageService.setVerificationStatus(false);
    }
  }

}
