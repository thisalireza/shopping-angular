import { Component } from '@angular/core';
import {FooterComponent} from "../shared/footer/footer.component";
import {MenuComponent} from "../shared/header/header.component";

@Component({
    selector: 'app-about-us',
    imports: [
        FooterComponent,
        MenuComponent
    ],
  standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
