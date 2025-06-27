import {Component} from '@angular/core';
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-contact-us',
  imports: [
    MapComponent
  ],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
