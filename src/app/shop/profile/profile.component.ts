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
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl({ value: '', disabled: true }),
    phone: new FormControl('')
  });

  get fullName() {
    return this.profileForm.get('fullName');
  }

  saveProfile() {
    if (this.profileForm.valid) {
      console.log('Saving profile:', this.profileForm.value);
    }
  }
}
