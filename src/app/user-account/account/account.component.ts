import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {AuthStatusService} from "../../services/auth-status.service";
import {Subscription} from "rxjs";
import Swal from "sweetalert2";

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

  requestLogout(){
    Swal.fire({
      showConfirmButton: false,
      title: "آیا می خواهید از پنل کاربری خود خارج شوید؟",
      html: `
<div class="d-flex gap-3 justify-content-center align-items-center">
      <div>
      <button class="btn btn-secondary rounded-3">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
      انصراف
</button>

</div>
<div >

      <button class="btn btn-danger rounded-3" (click)="logout()">
      خروج
                <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>

</button>

</div>
</div>
      `,
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
      }
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
