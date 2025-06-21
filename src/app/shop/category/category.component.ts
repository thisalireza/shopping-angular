import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-category',
  imports: [
    RouterLink
  ],
  templateUrl: './category.component.html',
  standalone: true,
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
