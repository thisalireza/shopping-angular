import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from './products.service';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private likesMap = new Map<number, boolean>();
  private readonly STORAGE_KEY = 'liked_products';
  private likesChangedSubject = new Subject<void>();
  likesChanged$ = this.likesChangedSubject.asObservable();

  constructor(private injector: Injector) {
    this.loadLikedProducts();
  }

  private get productService(): ProductService {
    return this.injector.get(ProductService);
  }

  /** ✅ لایک / آن‌لایک */
  toggleProductLike(productId: number): void {
    const current = this.getProductLike(productId);
    this.setProductLike(productId, !current);
  }

  /** ✅ ست کردن وضعیت لایک */
  setProductLike(productId: number, isLiked: boolean): void {
    if (isLiked) {
      this.likesMap.set(productId, true);
    } else {
      this.likesMap.delete(productId);
    }
    this.saveToLocalStorage();
    this.likesChangedSubject.next();
  }

  /** ✅ بررسی وضعیت */
  getProductLike(productId: number): boolean {
    return this.likesMap.has(productId);
  }

  /** ✅ برگردوندن فقط محصولات لایک‌شده */
  getLikedProducts(): Product[] {
    const all = this.productService?.getAllProducts?.() ?? [];
    return all.filter(p => this.likesMap.has(p.id));
  }

  getTotalLikes(): number {
    return this.likesMap.size;
  }

  private saveToLocalStorage(): void {
    const likesArray = Array.from(this.likesMap.keys());
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(likesArray));
  }

  private loadLikedProducts(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        const likedIds: number[] = JSON.parse(stored);
        this.likesMap = new Map(likedIds.map(id => [id, true]));
      } catch (e) {
        console.warn('LikeService: invalid liked_products in localStorage', e);
        this.likesMap = new Map();
      }
    }
  }
}
