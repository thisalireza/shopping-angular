import {Component, OnInit} from '@angular/core';
import {MapComponent} from "../map/map.component";
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact-us',
  imports: [
    MapComponent,
    ReactiveFormsModule,
    MdbFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      form_name: ['', [Validators.required, Validators.minLength(1)]],
      form_email: ['', [Validators.required, Validators.email]],
      form_subject: ['', [Validators.required]],
      form_message: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.form.statusChanges.subscribe(status => {
      console.log('Form status:', status); // should show VALID when form is filled
    });
  }
  async send() {
    if (this.form.invalid) return;

    emailjs.init('JyJwiWiChgsewjDtD');

    const values = this.form.value;

    await emailjs.send("service_zxk5pnj", "template_yazrffr", {
      from_name: values.form_name,
      to_name: 'Admin',
      from_email: values.form_email,
      subject: values.form_subject,
      message: values.form_message,
    });

    // Reset form values
    this.form.reset({
      form_name: '',
      form_email: '',
      form_subject: '',
      form_message: ''
    });

    // Optionally mark form as untouched to hide errors
    this.form.markAsPristine();
    this.form.markAsUntouched();

    alert("پیام با موفقیت ارسال شد!");
  }



}
