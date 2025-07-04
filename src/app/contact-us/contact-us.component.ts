import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MapComponent} from '../map/map.component';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {CaptchaComponent} from '../shared/captcha/captcha.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    MapComponent,
    ReactiveFormsModule,
    FormsModule,
    MdbFormsModule,
    CaptchaComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  captchaValid = false;
  @ViewChild(CaptchaComponent) captchaComponent!: CaptchaComponent;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      form_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onCaptchaAnswer(valid: boolean) {
    this.captchaValid = valid;
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm.invalid || !this.captchaValid) {
      return;
    }

    emailjs
      .sendForm('service_zxk5pnj', 'template_yazrffr', e.target as HTMLFormElement, {
        publicKey: 'JyJwiWiChgsewjDtD',
      })
      .then(
        () => {
          alert('SUCCESS!');
          this.contactForm.reset();  // ✅ Clear reactive form
          this.captchaComponent.reset();
          this.captchaValid = false; // ✅ Optionally reset captcha state if needed
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
