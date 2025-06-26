import {Component} from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductService} from "../../services/products.service";

@Component({
  selector: 'app-shop',
  imports: [
    ProductListComponent
  ],
  templateUrl: './shopping.component.html',
  standalone: true,
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  constructor(private productService: ProductService,) {
  }

  products$ = this.productService.getAllProducts();
}
