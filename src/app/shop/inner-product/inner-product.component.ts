import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {LikeService} from "../../services/like.service";

@Component({
  selector: 'app-inner-product',
  templateUrl: './inner-product.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgClass
  ],
  styleUrls: ['./inner-product.component.scss']
})
export class InnerProductComponent implements OnInit {
  product?: Product;
  @Output() toggleLikeEvent = new EventEmitter<number>();
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public likeService:LikeService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadProduct(slug);
      }
    });
  }

  private loadProduct(slug: string) {
    // Assuming ProductService has a method to get product by slug
    this.product = this.productService.getProductBySlug(slug);

    // Optional: handle product not found
    if (!this.product) {
      // Redirect or show a "product not found" message
      console.warn(`Product with slug '${slug}' not found.`);
    }
  }


  handleToggleLike(productId: number): void {
    this.likeService.toggleProductLike(productId); // ✅ clean and central
    this.toggleLikeEvent.emit(productId); // let parent know

  }

  protected readonly colorette = module
}
