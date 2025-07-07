import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import { ProductService } from "../../services/products.service";
import { CartItem } from "../../interfaces/cart-item";
import { FormsModule } from "@angular/forms";
import { Subscription } from 'rxjs';
import {Product} from "../../interfaces/product";
import {LikeService} from "../../services/like.service";
import {NgxImageZoomModule} from "ngx-image-zoom";
import {Lightbox} from "ngx-lightbox";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    FormsModule,
    CurrencyPipe,
    NgClass,
    NgxImageZoomModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'] // fixed typo here
})
export class CartComponent implements OnInit, OnDestroy {
  @Input() product?: Product;
  @Output() toggleLikeEvent = new EventEmitter<number>();

  cartItems: CartItem[] = [];
  private subscription!: Subscription;

  constructor(private productService: ProductService , public likeService: LikeService , private lightbox: Lightbox ,private router: Router,) {}


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


  onProductClick(product: any) {
    this.router.navigate(['/products', product.slug]);
  }

  openLightbox(imageUrl: string): void {
    const album = [{ src: imageUrl, caption: 'Product Image', thumb: imageUrl }];
    document.body.style.overflow = 'hidden';
    this.lightbox.open(album, 0);

    this.attachCloseDetection();
  }
  attachCloseDetection(): void {
    const observer = new MutationObserver(() => {
      // If lightbox container is removed from DOM, close happened
      const lbContainer = document.querySelector('.lightbox');
      if (!lbContainer) {
        // Lightbox closed, restore scroll
        document.body.style.overflow = 'auto';

        // Disconnect observer once done
        observer.disconnect();
      }
    });

    // Start observing body for child list changes (add/remove nodes)
    observer.observe(document.body, { childList: true, subtree: true });
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
