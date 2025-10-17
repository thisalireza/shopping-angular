// services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly CART_KEY = 'cart_v1';
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  // تعداد کل آیتم‌ها (observable)
  totalCount$: Observable<number> = this.items$.pipe(
    map(items => items.reduce((s, i) => s + (i.quantity || 0), 0))
  );

  constructor() {
    this.load();
  }

  private save(): void {
    try {
      localStorage.setItem(this.CART_KEY, JSON.stringify(this.itemsSubject.value));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }

  private load(): void {
    const raw = localStorage.getItem(this.CART_KEY);
    if (raw) {
      try {
        const parsed: CartItem[] = JSON.parse(raw);
        this.itemsSubject.next(parsed);
      } catch (e) {
        console.error('Invalid cart data in localStorage', e);
        this.itemsSubject.next([]);
      }
    }
  }

  getItemsSnapshot(): CartItem[] {
    return this.itemsSubject.value;
  }

  addToCart(product: Product, qty = 1): void {
    const items = [...this.itemsSubject.value];
    const idx = items.findIndex(i => i.id === product.id);
    if (idx > -1) {
      items[idx] = { ...items[idx], quantity: items[idx].quantity + qty };
    } else {
      items.push({ ...product, quantity: qty });
    }
    this.itemsSubject.next(items);
    this.save();
  }

  remove(productId: number): void {
    const items = this.itemsSubject.value.filter(i => i.id !== productId);
    this.itemsSubject.next(items);
    this.save();
  }

  updateQuantity(productId: number, quantity: number): void {
    const items = this.itemsSubject.value.map(i =>
      i.id === productId ? { ...i, quantity } : i
    ).filter(i => i.quantity > 0); // حذف خودکار اگر صفر شد
    this.itemsSubject.next(items);
    this.save();
  }

  clear(): void {
    this.itemsSubject.next([]);
    this.save();
  }
}
