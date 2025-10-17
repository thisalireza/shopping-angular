// src/app/services/products.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cart: { [productId: number]: { product: Product; quantity: number } } = {};
  private cartItemCount = new BehaviorSubject<number>(0);
  public cartItemCount$ = this.cartItemCount.asObservable();

  private readonly PRODUCTS_KEY = 'products_v1';
  private readonly CART_KEY = 'cart_v1';

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  // <-- مسیر پیش‌فرض فایل JSON در assets (اگر فایلت در جای دیگریه این مسیر رو تغییر بده)
  private readonly PRODUCTS_ASSET_PATH = '/assets/data/products.json';

  constructor(private http: HttpClient) {
    this.loadProductsFromCacheOrAssets();
    this.loadCart();
  }

  // ---------------- Cart (backward-compatible) ----------------
  private saveCart(): void {
    try {
      localStorage.setItem(this.CART_KEY, JSON.stringify(this.cartItemsSubject.value));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }

  private loadCart(): void {
    const cartData = localStorage.getItem(this.CART_KEY);
    if (cartData) {
      try {
        const parsed: CartItem[] = JSON.parse(cartData);
        this.cart = {};
        parsed.forEach(ci => {
          const { id, quantity, ...rest } = ci as any;
          const product = { ...rest, id } as Product;
          this.cart[id] = { product, quantity };
        });
        this.cartItemsSubject.next(parsed);
        this.updateCartCount();
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
        this.cart = {};
        this.cartItemsSubject.next([]);
        this.cartItemCount.next(0);
      }
    } else {
      this.cart = {};
      this.cartItemsSubject.next([]);
      this.cartItemCount.next(0);
    }
  }

  private syncMapToArrayAndSave() {
    const arr: CartItem[] = Object.values(this.cart).map(i => ({ ...i.product, quantity: i.quantity }));
    this.cartItemsSubject.next(arr);
    this.saveCart();
    this.updateCartCount();
  }

  private updateCartCount() {
    const total = Object.values(this.cart).reduce((s, it) => s + it.quantity, 0);
    this.cartItemCount.next(total);
  }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addToCart(product: Product, quantity: number = 1) {
    if (this.cart[product.id]) {
      this.cart[product.id].quantity += quantity;
    } else {
      this.cart[product.id] = { product, quantity };
    }
    this.syncMapToArrayAndSave();
  }

  removeFromCart(productId: number): void {
    if (this.cart[productId]) {
      delete this.cart[productId];
      this.syncMapToArrayAndSave();
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    if (this.cart[productId]) {
      if (quantity > 0) {
        this.cart[productId].quantity = quantity;
      } else {
        delete this.cart[productId];
      }
      this.syncMapToArrayAndSave();
    }
  }

  getTotalCartItems(): number {
    return this.cartItemCount.value;
  }

  getProductQuantityInCart(productId: number): number {
    const item = this.cart[productId];
    return item ? item.quantity : 0;
  }

  clearCart(): void {
    this.cart = {};
    this.syncMapToArrayAndSave();
  }

  // ---------------- Products (load from assets + cache) ----------------
  private loadProductsFromCacheOrAssets(): void {
    const cached = localStorage.getItem(this.PRODUCTS_KEY);
    if (cached) {
      try {
        const parsed: Product[] = JSON.parse(cached);
        this.productsSubject.next(parsed);
        return;
      } catch (e) {
        console.warn('Invalid cached products, reloading from assets', e);
      }
    }
    this.loadProductsFromAssets();
  }

  private loadProductsFromAssets(): void {
    this.http.get<Product[]>(this.PRODUCTS_ASSET_PATH).pipe(
      tap(list => {
        this.productsSubject.next(list || []);
        try { localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(list || [])); } catch {}
      }),
      catchError(err => {
        console.error('[ProductService] failed to load products from assets:', err);
        this.productsSubject.next([]);
        return of([] as Product[]);
      })
    ).subscribe();
  }


  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
    try { localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(products)); } catch {}
  }

  // Backward compatible API
  getAllProducts(): Product[] { return this.productsSubject.value; }
  getAll(): Product[] { return this.getAllProducts(); }
  getAllProducts$(): Observable<Product[]> { return this.products$; }

  getProductById(id: number): Product | undefined {
    return this.getAllProducts().find(p => p.id === id);
  }
  getProductBySlug(slug: string): Product | undefined {
    return this.getAllProducts().find(p => p.slug === slug);
  }
  getProductsByCategory(category: string): Product[] {
    return this.getAllProducts().filter(p => p.category === category);
  }


  // category helpers (همون نام‌هایی که کامپوننت‌هات صدا می‌زنن)
  getMacProducts(): Product[] { return this.getProductsByCategory('macbook'); }
  getIphoneProducts(): Product[] { return this.getProductsByCategory('iphone'); }
  getIpadProducts(): Product[] { return this.getProductsByCategory('ipad'); }
  getAirpodsProducts(): Product[] { return this.getProductsByCategory('airpods'); }
  getAppleWatchProducts(): Product[] { return this.getProductsByCategory('apple-watch'); }
  getGiftCardProducts(): Product[] { return this.getProductsByCategory('gift-card'); }
}
