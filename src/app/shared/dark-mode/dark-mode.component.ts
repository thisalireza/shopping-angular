import { Component, OnInit, Renderer2 } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.scss',
  imports: [
    NgIf
  ],
  encapsulation: ViewEncapsulation.None  // Disable view encapsulation
})
export class DarkModeComponent {
  darkMode: string | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.darkMode = localStorage.getItem('darkMode');
    if (this.darkMode === 'active') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  enableDarkMode(): void {
    this.renderer.removeClass(document.body, 'sunny');
    this.renderer.addClass(document.body, 'dark-mode');
    localStorage.setItem('darkMode', 'active');
    this.darkMode = 'active';
  }

  disableDarkMode(): void {
    this.renderer.addClass(document.body, 'sunny');
    this.renderer.removeClass(document.body, 'dark-mode');
    localStorage.removeItem('darkMode');
    this.darkMode = null;
  }

  toggleTheme(): void {
    this.darkMode = localStorage.getItem('darkMode');
    if (this.darkMode !== 'active') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }
}
