import { Component,HostListener } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  showButton = false;
  scrollDownLenght = 1000;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when scrolled down more than 1000px
    this.showButton = window.scrollY > this.scrollDownLenght;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
