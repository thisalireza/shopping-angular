import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgIf} from "@angular/common";
import {DarkModeService} from "../../services/dark-mode.service";

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
export class DarkModeComponent implements OnInit {

  darkMode = false;

  constructor(private darkModeService: DarkModeService) {
  }

  ngOnInit(): void {
    this.darkMode = this.darkModeService.isDarkMode();
  }

  toggleTheme(): void {
    this.darkModeService.toggle();
    this.darkMode = this.darkModeService.isDarkMode();
  }
}
