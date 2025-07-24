import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {AuthStatusService} from "../../services/auth-status.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgClass
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  activeLink: string = '/account/profile'; // Default active link
  isLoggedIn = false;
  private subscription!: Subscription;
  constructor(private authStatusService: AuthStatusService) {
    this.subscription = this.authStatusService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.authStatusService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}
