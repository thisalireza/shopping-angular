import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-search',
  imports: [
    NgIf
  ],
  templateUrl: './search.component.html',
  standalone: true,
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  isSearchActive: boolean = false; // Flag to toggle the search input

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
  }
}
