import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LikeService} from '../../services/like.service';
import {CurrencyPipe, NgClass, NgForOf, NgStyle} from "@angular/common";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgForOf,
    NgStyle,
    CurrencyPipe
  ],
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() toggleLikeEvent = new EventEmitter<number>();
  @Input() showAllProducts: boolean = true;

  constructor(
    private router: Router,
    public likeService: LikeService,
    public productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    if (this.showAllProducts && (!this.products || this.products.length === 0)) {
      this.products = this.productService.getAllProducts()
        .filter(p => p.is_in_inventory)
        .sort(() => Math.random() - 0.5)
        .slice(0, 16);
    }
  }


  updateProducts(): void {
    if (this.showAllProducts) {
      // فقط برای همه محصولات
      this.products = this.productService.getAllProducts()
        .filter(product => product.is_in_inventory)
        .sort(() => Math.random() - 0.5)
        .slice(0, 16);
    }
    // برای liked-products هیچ کاری نکن
  }


  handleToggleLike(productId: number) {
    this.toggleLikeEvent.emit(productId); // به parent اطلاع بده
  }

ط
  onProductClick(product: any) {
    this.router.navigate(['/products', product.slug]);
  }

  get containerClasses(): string {
    return `row row-cols-2 ${this.showAllProducts ? 'row-cols-md-4 g-4' : ' row-cols-md-3 g-4'} g-4`;
  }

  likes: boolean[] = new Array(this.products.length).fill(false); // like & unlike , so must boolean type.

  toggleLike(productId: number): void {
    const isLiked = !this.likeService.getProductLike(productId);
    this.likeService.setProductLike(productId, isLiked);

    this.updateProducts(); // This will now work correctly
  }
}
