// local-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly VERIFICATION_KEY = 'verification_status';

  constructor() {
    // تنظیم مقدار پیش‌فرض در اولین بار اجرا
    if (!this.getItem(this.VERIFICATION_KEY)) {
      this.setItem(this.VERIFICATION_KEY, 'false');
    }
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  getVerificationStatus(): boolean {
    const status = this.getItem(this.VERIFICATION_KEY);
    return status === 'true';
  }

  setVerificationStatus(status: boolean): void {
    this.setItem(this.VERIFICATION_KEY, status.toString());
  }
}
