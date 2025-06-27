import {Component, Input, OnInit} from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { LikeService } from '../../services/like.service';
import { NgIf } from '@angular/common';
import {ProductService} from "../../services/products.service";
import { BehaviorSubject } from 'rxjs';
import {Product} from "../../interfaces/product";
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
export class LikedProductsComponent implements OnInit {
  products = [];
  private _showAllProducts: boolean = false;
  likedProducts$ = new BehaviorSubject<Product[]>([]);
  constructor(
    private likeService: LikeService,
    private productService: ProductService
  ) {
    this.updateProducts();
    this.updateLikedProductsList();
    this.refreshLikedProducts();

  }

  ngOnInit() {
  }

  private updateProducts(): void {
    this.products = this._showAllProducts
      ? this.productService.getAllProducts()
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

  handleToggleLike(productId: number) {
    console.log('Toggle like for', productId);
    const isLiked = !this.likeService.getProductLike(productId);
    this.likeService.setProductLike(productId, isLiked);
    this.refreshLikedProducts();
  }

  refreshLikedProducts() {
    const liked = this.productService.getAllProducts()
      .filter(product => this.likeService.getProductLike(product.id));
    this.likedProducts$.next(liked);
  }

  updateLikedProductsList() {
    this.likedProducts$.next([...this.productService.getAllProducts()
      .filter(product => this.likeService.getProductLike(product.id))]);
  }


}
