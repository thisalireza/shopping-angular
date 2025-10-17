import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductListComponent } from '../../shop/product-list/product-list.component';
import { LikeService } from '../../services/like.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-liked-products',
  standalone: true,
  imports: [ProductListComponent, NgIf],
  templateUrl: './liked-products.component.html',
  styleUrl: './liked-products.component.scss',
})
export class LikedProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private sub?: Subscription;

  constructor(private likeService: LikeService) {}

  ngOnInit() {
    this.loadLikedProducts();
    this.sub = this.likeService.likesChanged$.subscribe(() => {
      this.loadLikedProducts();
    });
  }

  private loadLikedProducts() {
    this.products = this.likeService.getLikedProducts();
  }

  toggleLike(productId: number) {
    this.likeService.toggleProductLike(productId); // وضعیت لایک تغییر می‌کند
    this.products = this.likeService.getLikedProducts(); // لیست فوراً آپدیت می‌شود
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
