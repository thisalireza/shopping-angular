// auth-status.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {
  private readonly STORAGE_KEY = 'verification_status';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    const storedStatus = localStorage.getItem(this.STORAGE_KEY);
    if (storedStatus === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }

  login(): void {
    localStorage.setItem(this.STORAGE_KEY, 'true');
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    localStorage.setItem(this.STORAGE_KEY, 'false');
    this.isLoggedInSubject.next(false);
  }

  getLoginStatus(): boolean {
    return this.isLoggedInSubject.value;
  }
}
