import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { LikeService } from '../../services/like.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-liked-products',
  standalone: true,
  imports: [
    ProductListComponent,
    NgIf
  ],
  templateUrl: './liked-products.component.html',
  styleUrl: './liked-products.component.scss'
})
export class LikedProductsComponent {
  products = [];
  private _showAllProducts: boolean = false;

  constructor(private likeService: LikeService) {
    this.updateProducts();
  }

  private updateProducts(): void {
    this.products = this._showAllProducts
      ? this.likeService.getAllProducts()
      : this.likeService.getLikedProducts();
  }

  @Input()
  set showAllProducts(value: boolean) {
    this._showAllProducts = value;
    this.updateProducts();
  }

  get showAllProducts(): boolean {
    return this._showAllProducts;
  }

  toggleLike(productId: number): void {
    const isLiked = !this.likeService.getProductLike(productId);
    this.likeService.setProductLike(productId, isLiked);
    this.updateProducts();
  }
}
