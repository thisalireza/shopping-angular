import { Component } from '@angular/core';
import {FooterComponent} from "../shared/footer/footer.component";
import {MenuComponent} from "../shared/header/header.component";

@Component({
  selector: 'app-contact-us',
  imports: [
    FooterComponent,
    MenuComponent
  ],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
