import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { RouterLink } from "@angular/router";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import { ProductService } from "../../services/products.service";
import { CartItem } from "../../interfaces/cart-item";
import { FormsModule } from "@angular/forms";
import { Subscription } from 'rxjs';
import {Product} from "../../interfaces/product";
import {LikeService} from "../../services/like.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    FormsModule,
    CurrencyPipe,
    NgClass
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'] // fixed typo here
})
export class CartComponent implements OnInit, OnDestroy {
  @Input() product?: Product;
  @Output() toggleLikeEvent = new EventEmitter<number>();

  cartItems: CartItem[] = [];
  private subscription!: Subscription;

  constructor(private productService: ProductService , private likeService: LikeService) {}

  ngOnInit(): void {
    this.subscription = this.productService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  updateQuantity(item: CartItem): void {
    this.productService.updateQuantity(item.id, item.quantity);
  }

  remove(productId: number): void {
    this.productService.removeFromCart(productId);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleToggleLike(productId: number): void {
    this.likeService.toggleProductLike(productId); // ✅ clean and central
    this.toggleLikeEvent.emit(productId); // let parent know

  }

  quantity = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity < this.product.items_left) {
      this.quantity++;
    }
  }
}
