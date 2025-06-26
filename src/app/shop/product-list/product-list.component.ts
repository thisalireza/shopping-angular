import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LikeService} from '../../services/like.service';
import {CurrencyPipe, NgClass, NgForOf, NgStyle} from "@angular/common";
import {Product} from "../../interfaces/product";

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
    private route: Router,
    public likeService: LikeService
  ) {}

  ngOnInit() {
    if (this.showAllProducts) {
      this.products = this.likeService.getAllProducts()
        .filter(product => product.is_in_inventory)
        .sort(() => Math.random() - 0.5)
        .slice(0, 16);
    } else {
      this.products = this.likeService.getLikedProducts();
    }
  }

  handleToggleLike(index: number): void {
    const product = this.products[index];
    this.toggleLikeEvent.emit(product.id);
    const isLiked = !this.likeService.getProductLike(product.id);
    this.likeService.setProductLike(product.id, isLiked);
  }

  goToProductInfo(item: any) {
    this.route.navigate(['/products/info'], {
      queryParams: {
        id: item.id,
        title: item.title
      }
    });
  }

  get containerClasses(): string {
    return `row row-cols-2 ${this.showAllProducts ? 'row-cols-md-4 g-4' : ' row-cols-md-3 g-4'} g-4`;
  }

  likes: boolean[] = new Array(this.products.length).fill(false); // like & unlike , so must boolean type.

  @Output() toggleLike(index: number): void {
    const product = this.products[index];
    const isLiked = !this.likeService.getProductLike(product.id);
    this.likeService.setProductLike(product.id, isLiked);
  }
}
