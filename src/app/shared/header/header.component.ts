import {Component, HostListener, inject, OnDestroy} from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {SearchComponent} from "../search/search.component";

import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {DarkModeComponent} from "../dark-mode/dark-mode.component";
import {CountdownTimerComponent} from "../countdown-timer/countdown-timer.component";
import {NgClass, NgIf} from "@angular/common";
import {LikeService} from "../../services/like.service";
import {AuthStatusService} from "../../services/auth-status.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-header',
  imports: [
    MdbCollapseModule,
    SearchComponent,
    RouterLink,
    RouterLinkActive,
    DarkModeComponent,
    CountdownTimerComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class MenuComponent implements OnDestroy{
  constructor(public likeService: LikeService , private authStatusService: AuthStatusService) {
    this.subscription = this.authStatusService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  activeLink: string = '/home'; // Default active link

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  getTotalLikes(): number {
    return this.likeService.getTotalLikes();
  }


  isLoggedIn = false;
  private subscription!: Subscription;





  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.authStatusService.logout();
  }
}
