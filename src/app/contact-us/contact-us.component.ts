import {Component} from '@angular/core';
import {MapComponent} from "../map/map.component";
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  imports: [
    MapComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
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


}
