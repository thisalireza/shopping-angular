import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';
  constructor(
    private route: ActivatedRoute,
  ) {
  }

}
