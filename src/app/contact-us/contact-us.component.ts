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
export class ContactUsComponent {
  captchaValid = false;

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {
  }

  async send() {
    emailjs.init('JyJwiWiChgsewjDtD');
    let response = await emailjs.send("service_zxk5pnj", "template_yazrffr", {
      from_name: this.form.value.form_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.form_email,
      subject: this.form.value.form_subject,
      message: this.form.value.form_message,
    });
    this.form.reset();
    alert("message has been sent successfully!");
  }


  onCaptchaAnswer(valid: boolean) {
    this.captchaValid = valid;
  }

}

