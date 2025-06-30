import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private renderer: Renderer2;
  private darkModeKey = 'darkMode';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init(): void {
    const mode = localStorage.getItem(this.darkModeKey);
    if (mode === 'active') {
      this.enable();
    } else {
      this.disable();
    }
  }

  enable(): void {
    this.renderer.addClass(document.body, 'dark-mode');
    this.renderer.removeClass(document.body, 'sunny');
    localStorage.setItem(this.darkModeKey, 'active');
  }

  disable(): void {
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.addClass(document.body, 'sunny');
    localStorage.removeItem(this.darkModeKey);
  }

  toggle(): void {
    if (this.isDarkMode()) {
      this.disable();
    } else {
      this.enable();
    }
  }

  isDarkMode(): boolean {
    return localStorage.getItem(this.darkModeKey) === 'active';
  }
}
