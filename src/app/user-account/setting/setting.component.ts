import {Component} from '@angular/core';
import {DarkModeComponent} from "../../shared/dark-mode/dark-mode.component";
import {CookieService} from 'ngx-cookie-service';
import {AuthStatusService} from "../../services/auth-status.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    DarkModeComponent
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  constructor(private cookieService: CookieService , private authStatusService: AuthStatusService) {
  }

  // Clear all cookies
  clearCookies(): void {
    this.cookieService.deleteAll();

    let timerInterval;
    Swal.fire({
      title: "کوکی با موفقیت پاک شد",
      timer: 2000,
      confirmButtonText: 'تایید',
      customClass: {
        confirmButton: 'btn btn-danger'
      },
      icon: "success",
      draggable: true,
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
      timerProgressBar: true,
      didOpen: () => {
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
  }

  // Clear session storage
  clearSessionStorage(): void {
    sessionStorage.clear();

    let timerInterval;
    Swal.fire({
      title: "SessionStorage با موفقیت پاک شد",
      timer: 2000,
      confirmButtonText: 'تایید',
      customClass: {
        confirmButton: 'btn btn-danger'
      },
      icon: "success",
      draggable: true,
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
      timerProgressBar: true,
      didOpen: () => {
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });

  }

  // Clear local storage and logout
  clearLocalStorage(): void {
    localStorage.clear();
    this.logout();


    let timerInterval;
    Swal.fire({
      title: "localstorage با موفقیت پاک شد",
      timer: 2000,
      confirmButtonText: 'تایید',
      customClass: {
        confirmButton: 'btn btn-danger'
      },
      icon: "success",
      draggable: true,
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
      timerProgressBar: true,
      didOpen: () => {
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });

  }
//logout of account
  logout(): void {
    this.authStatusService.logout();
  }
}
