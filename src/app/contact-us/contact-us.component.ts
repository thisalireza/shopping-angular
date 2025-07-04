import {Component, OnInit} from '@angular/core';
import {MapComponent} from "../map/map.component";
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {NgIf} from "@angular/common";
import {CaptchaComponent} from "../shared/captcha/captcha.component";

@Component({
  selector: 'app-contact-us',
  imports: [
    MapComponent,
    ReactiveFormsModule,
    MdbFormsModule,
    FormsModule,
    NgIf,
    CaptchaComponent
  ],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  captchaValid = false;

  form: FormGroup = this.fb.group({
    form_name: ['', [Validators.required, Validators.minLength(1)]],
    form_email: ['', [Validators.required, Validators.email]],
    form_subject: ['', [Validators.required]],
    form_message: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form.statusChanges.subscribe(status => {
      console.log('Form status:', status);
    });
  }

  onCaptchaAnswer(valid: boolean) {
    this.captchaValid = valid;
  }

  async send() {
    if (this.form.invalid || !this.captchaValid) {
      alert("لطفا فرم را کامل کرده و کد امنیتی را صحیح وارد کنید.");
      return;
    }

    emailjs.init('JyJwiWiChgsewjDtD');

    const values = this.form.value;

    await emailjs.send("service_zxk5pnj", "template_yazrffr", {
      from_name: values.form_name,
      to_name: 'Admin',
      from_email: values.form_email,
      subject: values.form_subject,
      message: values.form_message,
    });

    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.captchaValid = false;

    alert("پیام با موفقیت ارسال شد!");
  }
}

