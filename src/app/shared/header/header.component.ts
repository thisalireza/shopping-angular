import {Component, HostListener, inject} from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {SearchComponent} from "../search/search.component";

import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {DarkModeComponent} from "../dark-mode/dark-mode.component";
import {CountdownTimerComponent} from "../countdown-timer/countdown-timer.component";
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-header',
  imports: [
    MdbCollapseModule,
    SearchComponent,
    RouterLink,
    RouterLinkActive,
    DarkModeComponent,
    CountdownTimerComponent,
    NgClass
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class MenuComponent {
  activeLink: string = '/home'; // Default active link

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}
