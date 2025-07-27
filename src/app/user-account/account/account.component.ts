import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
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
  constructor(private authStatusService: AuthStatusService , private router:Router) {
    this.subscription = this.authStatusService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  requestLogout() {
    Swal.fire({
      title: 'آیا می‌خواهید از سیستم خارج شوید؟',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-lg btn-danger rounded-3',
        cancelButton: 'btn btn-lg btn-secondary rounded-3'
      },
      confirmButtonText: '            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>\nخروج',
      cancelButtonText: '            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-cancel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M18.364 5.636l-12.728 12.728" /></svg>\nانصراف',
      reverseButtons: true,
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
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout();
      }
    });
  }


  logout(): void {
    this.authStatusService.logout();
    this.router.navigate(['/signIn']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}
