import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import {BehaviorSubject} from "rxjs";
import {CartItem} from "../interfaces/cart-item";


@Injectable({
  providedIn: 'root',
})



export class ProductService {
  private PRODUCTS_KEY = 'products';
  private readonly CART_KEY = 'cart';



  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  private saveCart(): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.cartItemsSubject.value));
  }

  private loadCart(): void {
    const cartData = localStorage.getItem(this.CART_KEY);
    if (cartData) {
      const parsedCart: CartItem[] = JSON.parse(cartData);
      this.cartItemsSubject.next(parsedCart);
    }
  }

  addToCart(product: Product): void {
    const cart = [...this.cartItemsSubject.value];
    const index = cart.findIndex(p => p.id === product.id);

    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    this.cartItemsSubject.next(cart);
    this.saveCart(); // <-- add this
  }

  removeFromCart(productId: number): void {
    const cart = this.cartItemsSubject.value.filter(p => p.id !== productId);
    this.cartItemsSubject.next(cart);
    this.saveCart(); // <-- add this
  }

  updateQuantity(productId: number, quantity: number): void {
    const cart = this.cartItemsSubject.value.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    this.cartItemsSubject.next(cart);
    this.saveCart(); // <-- add this
  }

  constructor() {
    this.loadProducts();
    this.loadCart();
  }

  private loadProducts(): void {
    const storedProducts = localStorage.getItem(this.PRODUCTS_KEY);
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }

  setProducts(products: Product[]): void {
    this.products = products;
    localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(products));
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter((product) => product.category === category);
  }

  // Optional category helpers
  getMacProducts(): Product[] {
    return this.getProductsByCategory('macbook');
  }

  getIphoneProducts(): Product[] {
    return this.getProductsByCategory('iphone');
  }

  getIpadProducts(): Product[] {
    return this.getProductsByCategory('ipad');
  }

  getAirpodsProducts(): Product[] {
    return this.getProductsByCategory('airpods');
  }

  getAppleWatchProducts(): Product[] {
    return this.getProductsByCategory('apple-watch');
  }

  getGiftCardProducts(): Product[] {
    return this.getProductsByCategory('gift-card');
  }




  private products:Product[] = [
    {
      id: 0,
      name: 'macbook air M2',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 88300000,
      discountPrice: 1,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/155a965d-0962-408d-7dea-557a62fc3900/height=364,width=364',
      slug: 'macbook-air-M2',
    },
    {
      id: 1,
      name: 'macbook pro M1',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'pro',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 66000000,
      discountPrice: 5,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/619c6e9d-9e4e-4c43-98d2-b27c783ff800/height=364,width=364',
      slug: 'macbook-pro-M1',
    },
    {
      id: 3,
      name: 'macbook air M1',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 53000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/682589c3-7c88-4652-968e-f6cf3bfdb300/height=364,width=364',
      slug: 'macbook-air-M1',
    },
    {
      id: 4,
      name: 'macbook pro M1pro',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'pro',
      color: ['سفید', , 'نقره ای', 'طلایی'],
      price: 93000000,
      discountPrice: 5,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/21397e47-c638-43de-026c-009a773b8800/height=364,width=364',
      slug: 'macbook-pro-M1pr',
    },
    {
      id: 5,
      name: 'macbook pro M2',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'pro',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 60,
      discountPrice: 5,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/3538448b-424f-4ad6-803a-517567ec3d00/height=364,width=364',
      slug: 'macbook-pro-M2',
    },
    {
      id: 6,
      name: 'macbook air 2018 i5',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 45000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/dbeb9e5d-3a31-4df0-282d-0666b1f89800/height=364,width=364',
      slug: 'macbook-air-2018-i5',
    },
    {
      id: 7,
      name: 'macbook air 2019 i5',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'نقره ای', 'طلایی', 'مشکی'],
      price: 34000000,
      discountPrice: 6,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/b92a2acb-2d9d-46b4-92fd-40c886836f00/height=364,width=364',
      slug: 'macbook-air-2019-i5',
    },
    {
      id: 8,
      name: 'macbook air 2013 i5',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 145,
      discountPrice: 9,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/e9ea450d-7090-4309-5038-92acb8b64000/height=364,width=364',
      slug: 'macbook-air-2013-i5',
    },
    {
      id: 26,
      name: 'macbook air 2011 i5',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی', 'طلایی'],
      price: 145,
      discountPrice: 9,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/dbb5dc2c-9351-4ffa-3e35-e2586c807a00/height=364,width=364',
      slug: 'macbook-air-2011-i5',
    },
    {
      id: 27,
      name: 'macbook air 2017 i5',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 27000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/47c93033-b5ef-426e-aa09-53ad1f3be900/height=364,width=364',
      slug: 'macbook-air-2017-i5',
    },
    {
      id: 28,
      name: 'macbook pro M1max',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'pro',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 120000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/c26e683d-11df-4546-84c7-ca9286c42d00/height=364,width=364',
      slug: 'macbook-pro-M1max',
    },
    {
      id: 29,
      name: 'macbook pro 2019 i9',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'pro',
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 70000000,
      discountPrice: 4,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/34374730-ce80-44a1-bcca-698499bfbc00/height=364,width=364',
      slug: 'macbook-pro-2019-i9',
    },
    {
      id: 30,
      name: 'macbook air 2010 i5',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای'],
      price: 20000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/dccb26a2-e386-49a7-929d-f77130407900/height=364,width=364',
      slug: 'macbook-air-2010-i5',
    },
    {
      id: 31,
      name: 'macbook pro 2016 i7',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'pro',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 60000000,
      discountPrice: 8,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/e45fb01d-52ae-41fe-e478-2a2965ccb700/height=364,width=364',
      slug: 'macbook-pro-2016-i7',
    },

    {
      id: 33,
      name: 'macbook air 2019 i5',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی', 'طلایی'],
      price: 37000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/cbfc1cfc-5e8d-4e29-54b6-a3910d3fd400/height=364,width=364',
      slug: 'macbook-air-2019-i5',
    },
    {
      id: 34,
      name: 'macbook air M2',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'macbook',
      innerCategory: 'air',
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 780000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/46ce84fb-800f-4429-c42a-635c39581a00/height=364,width=364',
      slug: 'macbook-air-M2',
    },
    {
      id: 35,
      name:
          'آیفون 16 ظرفیت 128 گیگابایت - دو سیم کارت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'iphone',
      innerCategory: 'normal',
      color: ['سفید', 'آبی', 'مشکی'],
      price: 90000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 2,
      imageURL:
          '../../assets/images/products/iphone/height=364,width=364 (1).avif',
      slug: 'apple-iphone-16-128gb',
    },
    {
      id: 36,
      name: 'آیفون 16 پرو مکس ظرفیت 256 گیگابایت ',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'iphone',
      innerCategory: 'pro',
      color: ['سفید', 'مشکی', 'نقره ای', 'طلایی'],
      price: 150000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
          '../../assets/images/products/iphone/height=364,width=364.avif',
      slug: 'iphone-16-pro-max/apple-iphone-16-pro-max-256gb',
    },
    {
      id: 37,
      name: 'آیفون 16E ظرفیت 256 گیگابایت ',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'iphone',
      innerCategory: 'normal',
      color: ['سفید', 'قرمز','آبی'],
      price: 80000000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 1,
      imageURL:
          '../../assets/images/products/iphone/height=364,width=364 (2).avif',
      slug: 'apple-iphone-16e-256gb',
    },
    {
      id: 38,
      name: 'آیفون 15 پرو مکس ظرفیت 256 گیگابایت ',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'iphone',
      innerCategory: 'pro',
      color: ['سفید',  'مشکی', 'نقره ای', 'طلایی'],
      price: 120000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
          '../../assets/images/products/iphone/height=364,width=364 (9).avif',
      slug: 'apple-iphone-15-pro-max-256gb',
    },
    {
      id: 39,
      name: 'آیفون 15 ظرفیت 256 گیگابایت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'iphone',
      innerCategory: 'normal',
      color: ['سفید', 'مشکی'],
      price: 90000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/iphone/height=364,width=364 (3).avif',
      slug: 'pple-iphone-15-256gb',
    },
    {
      id: 40,
      name: 'آیفون 14 پرو مکس ظرفیت 256 گیگابایت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'iphone',
      innerCategory: 'pro',
      color: ['قرمز' ,'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 77000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 2,
      imageURL:
          '../../assets/images/products/iphone/height=364,width=364 (4).avif',
      slug: 'apple-iphone-14-pro-max-256gb',
    },
    {
      id: 41,
      name: 'آیفون 14 پلاس ظرفیت 128 گیگابایت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'iphone',
      innerCategory: 'normal',
      color: ['قرمز' ,'آبی' ],
      price: 60000000,
      discountPrice: 2,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
          '../../assets/images/products/iphone/height=364,width=364 (5).avif',
      slug: 'apple-iphone-14-pro-max-256gb',
    },
    {
      id: 42,
      name: 'آیپد پرو 13 اینچ M4 ظرفیت 256 گیگابایت\n',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'ipad',
      innerCategory: 'pro',
      color: ['سفید',  'مشکی', 'نقره ای', 'طلایی'],
      price: 150000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/ipad/height=364,width=364 (8).avif',
      slug: 'apple-ipad-pro-m4-13-inch-256gb-wi-fi',
    },
    {
      id: 43,
      name: 'آیپد ایر 11 اینچ M3 ظرفیت 256 گیگابایت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'ipad',
      innerCategory: 'normal',
      color: ['قرمز' ,'آبی' ],
      price: 80000000,
      discountPrice: 1,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
          '../../assets/images/products/ipad/height=364,width=364.avif',
      slug: 'apple-ipad-air-m3-11-inch-256gb-wi-fi',
    },
    {
      id: 44,
      name: 'آیپد نسل 11 ظرفیت 256 گیگابایت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'ipad',
      innerCategory: 'normal',
      color: ['سفید', 'مشکی'],
      price: 37000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 2,
      imageURL:
          '../../assets/images/products/ipad/height=364,width=364 (2).avif',
      slug: 'apple-ipad-11-inch-11th-256gb-wi-fi',
    },
    {
      id: 45,
      name: 'آیپد مینی نسل 7 ظرفیت 256 گیگابایت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'ipad',
      innerCategory: 'normal',
      color: ['سفید',  'مشکی', 'نقره ای', 'طلایی'],
      price: 40000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
          '../../assets/images/products/ipad/height=364,width=364 (3).avif',
      slug: 'pple-ipad-mini-7th-8.3-inch-256gb-wi-fi',
    },
    {
      id: 46,
      name: 'آیپد پرو 11 اینچ M1 ظرفیت 512 گیگ 5G',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'ipad',
      innerCategory: 'normal',
      color: ['قرمز' ,'آبی' ],
      price: 80000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 1,
      imageURL:
          '../../assets/images/products/ipad/height=364,width=364 (7).avif',
      slug: 'apple-ipad-pro-m1-11-inch-512gb-wi-ficellular',
    },
    {
      id: 47,
      name: 'آیپد ایر 4 ظرفیت 64 گیگ 4G',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'ipad',
      innerCategory: 'normal',
      color: ['سفید', 'مشکی'],
      price: 150000000,
      discountPrice: 3,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
          '../../assets/images/products/ipad/height=364,width=364 (9).avif',
      slug: 'apple-ipad-air-4-10-9-inch-64gb-wi-ficellular',
    },
    {
      id: 48,
      name:
          'ایرپاد هندزفری بلوتوث پرو نسل 2 اپل',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'airpods',
      innerCategory: 'normal',
      color: ['سفید'],
      price: 20000000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 2,
      imageURL:
          '../../assets/images/products/airpods/height=364,width=364 (10).avif',
      slug: 'apple-airpods-pro-2nd-generation',
    },
    {
      id: 49,
      name:
          'ایرپاد هندزفری بلوتوث نسل 4 اپل',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'airpods',
      innerCategory: 'normal',
      color: ['سفید'],
      price: 12000000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/airpods/height=364,width=364.avif',
      slug: 'apple-airpods-4rd-generation',
    },
    {
      id: 50,
      name: 'ایرپاد مکس هدفون بلوتوث اپل',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'airpods',
      innerCategory: 'normal',
      color: ['سفید',  'مشکی', 'نقره ای', 'طلایی'],
      price: 60000000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
          '../../assets/images/products/airpods/height=364,width=364 (2).avif',
      slug: 'apple-airpods-max',
    },
    {
      id: 51,
      name:
          'ایرپاد هندزفری بلوتوث نسل 3 اپل',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'airpods',
      innerCategory: 'normal',
      color: ['سفید'],
      price: 10000000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
          '../../assets/images/products/airpods/height=364,width=364 (1).avif',
      slug: 'apple-airpods-3rd-generation',
    },
    {
      id: 52,
      name:
          'ایرپاد هندزفری بلوتوث نسل 2 اپل',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'airpods',
      innerCategory: 'normal',
      color: ['سفید'],
      price: 7000000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 1,
      imageURL:
          '../../assets/images/products/airpods/height=364,width=364 (3).avif',
      slug: 'apple-airpods-2nd-generation',
    },
    {
      id: 53,
      name: 'هندزفری با پورت لایتنینگ اورجینال اپل',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'airpods',
      innerCategory: 'normal',
      color: ['سفید'],
      price: 150000000,
      discountPrice: 3,
      is_in_inventory: false,
      items_left: 2,
      imageURL:
          '../../assets/images/products/airpods/height=364,width=364 (4).avif',
      slug: 'apple-earpods-with-lightning-connector',
    },
    {
      id: 54,
      name: 'اپل واچ سری 10 تیتانیومی نچرال با بند میلانس لوپ',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'apple-watch',
      innerCategory: 'normal',
      color: ['سفید'],
      price: 40000000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/apple-watch/height=364,width=364 (2).avif',
      slug: 'apple-watch-series-10-natural-titanium-case-with-milanese-loop-band',
    },
    {
      id: 55,
      name: 'اپل واچ نایک SE 2 آلومینیوم استارلایت با بند اسپرت سیلیکون مشکی',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'apple-watch',
      innerCategory: 'normal',
      color: ['سفید', 'مشکی'],
      price: 16000000,
      discountPrice: 4,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/apple-watch/height=364,width=364 (6).avif',
      slug: 'apple-watch-se-2/apple-watch-nike-se-2-starlight-aluminum-case-with-nike-sport-band-black-black',
    },
    {
      id: 56,
      name: 'اپل واچ اولترا نسل 2 تیتانیومی نچرال با بند میلانس مدل 2024',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'apple-watch',
      innerCategory: 'normal',
      color: ['سفید',  'مشکی', 'نقره ای', 'طلایی'],
      price: 43000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/apple-watch/height=364,width=364 (7).avif',
      slug: 'apple-watch-ultra-2-natural-titanium-case-with-titanium-milanese-loop-2024',
    },
    {
      id: 57,
      name: 'اپل واچ سری 10 جت بلک با بند اسپرت سیلیکون مشکی',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'apple-watch',
      innerCategory: 'normal',
      color: ['سفید',  'مشکی', 'نقره ای', 'طلایی'],
      price: 24000000,
      discountPrice: 1,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/apple-watch/height=364,width=364 (9).avif',
      slug: 'apple-watch-series-10-get-black-aluminum-case-with-black-sport-band',
    },
    {
      id: 58,
      name: 'اپل واچ اولترا نسل 2 تیتانیومی نچرال با بند نیوی اوشن مدل 2024',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'apple-watch',
      innerCategory: 'normal',
      color: ['سفید', 'مشکی'],
      price: 45000000,
      discountPrice: 2,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/apple-watch/height=364,width=364 (10).avif',
      slug: 'apple-watch-ultra-2-natural-titanium-case-with-navy-ocean-band-2024',
    },
    {
      id: 59,
      name: 'اپل واچ SE 2 آلومینیوم استارلایت با بند اسپرت سیلیکون استارلایت',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'apple-watch',
      innerCategory: 'normal',
      color: ['سفید'],
      price: 150000000,
      discountPrice: 3,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
          '../../assets/images/products/apple-watch/height=364,width=364 (4).avif',
      slug: 'apple-watch-se-2-starlight-aluminum-case-with-starlight-sport-band',
    },
    {
      id: 60,
      name: 'اپل آیدی با ایمیل دلخواه',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'gift-card',
      innerCategory: 'normal',
      color: [''],
      price: 1500000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/gift-card/364.webp',
      slug: 'custom-apple-id',
    },
    {
      id: 61,
      name: 'اپل آیدی تحویل فوری',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'gift-card',
      innerCategory: 'normal',
      color: [''],
      price: 1200000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
          '../../assets/images/products/gift-card/365.webp',
      slug: 'fast-apple-id',
    },
    {
      id: 62,
      name: 'گیفت کارت پلی استیشن 10 دلاری آمریکا',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'gift-card',
      innerCategory: 'normal',
      color: [''],
      price: 1300000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 1,
      imageURL:
          '../../assets/images/products/gift-card/301.webp',
      slug: 'playstation-psn-giftcard-10-usd',
    },
    {
      id: 63,
      name: 'گیفت کارت اپل 10 دلاری آمریکا',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'gift-card',
      innerCategory: 'normal',
      color: [''],
      price: 900000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/gift-card/260.webp',
      slug: 'apple-giftcard-10-usd',
    },
    {
      id: 64,
      name: 'گیفت کارت استیم والت گلوبال 150 دلاری تایوان',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'gift-card',
      innerCategory: 'normal',
      color: [''],
      price: 800000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
          '../../assets/images/products/gift-card/246.webp',
      slug: 'steam-wallet-giftcard-5-usd',
    },
    {
      id: 65,
      name: 'گیفت کارت 660 یوسی پابجی موبایل',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      category: 'gift-card',
      innerCategory: 'normal',
      color: [''],
      price: 700000,
      discountPrice: 3,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
          '../../assets/images/products/gift-card/317.webp',
      slug: 'Pubgmobile-giftcard-10-usd',
    },
  ];
}
