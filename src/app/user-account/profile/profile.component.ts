import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MdbFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileForm = new FormGroup({
    phone: new FormControl('', [Validators.required]),
    email: new FormControl({ value: '', disabled: false }),
    fullName : new FormControl('')
  });

  get phone() {
    return this.profileForm.get('phone');
  }

  saveProfile() {
    if (this.profileForm.valid) {
    }
  }
}
