import { Injectable } from '@angular/core';
import {ProductService} from "./products.service";

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private likesMap = new Map<number, boolean>();
  private STORAGE_KEY = 'liked_products';

  constructor(private productService: ProductService) {
    this.loadLikedProducts();
  }

  setProductLike(productId: number, isLiked: boolean): void {
    this.likesMap.set(productId, isLiked);
    this.saveToLocalStorage();
  }

  getProductLike(productId: number): boolean {
    return this.likesMap.get(productId) || false;
  }

  getLikedProducts() {
    return this.productService.getAllProducts().filter(product =>
      this.likesMap.get(product.id) === true
    );
  }

  getTotalLikes(): number {
    return Array.from(this.likesMap.values()).filter(isLiked => isLiked).length;
  }

  private saveToLocalStorage(): void {
    const likesArray = Array.from(this.likesMap.entries());
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(likesArray));
  }

  private loadLikedProducts(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      const likesArray = JSON.parse(stored);
      this.likesMap = new Map(likesArray);
    }
  }

  toggleProductLike(productId: number): void {
    const isLiked = !this.getProductLike(productId);
    this.setProductLike(productId, isLiked);
  }
}
