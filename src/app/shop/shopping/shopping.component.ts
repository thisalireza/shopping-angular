import {Component} from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-shop',
  imports: [
    ProductListComponent
  ],
  templateUrl: './shopping.component.html',
  standalone: true,
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent extends ProductListComponent {
  products$ = this.likeService.getAllProducts();
}
