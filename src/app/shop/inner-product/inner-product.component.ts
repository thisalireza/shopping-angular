import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/products.service';
import {Product} from '../../interfaces/product';
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {LikeService} from "../../services/like.service";
import {Lightbox} from 'ngx-lightbox';
import {NgxImageZoomModule} from "ngx-image-zoom";

@Component({
  selector: 'app-inner-product',
  templateUrl: './inner-product.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgClass,
    NgxImageZoomModule,
  ],
  styleUrls: ['./inner-product.component.scss']
})
export class InnerProductComponent implements OnInit, OnDestroy{
  product?: Product;
  @Output() toggleLikeEvent = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public likeService: LikeService,
    private lightbox: Lightbox
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadProduct(slug);
      }
    });
  }


  openLightbox(imageUrl: string): void {
    const album = [{ src: imageUrl, caption: 'Product Image', thumb: imageUrl }];
    document.body.style.overflow = 'hidden';
    this.lightbox.open(album, 0);

    this.attachCloseDetection();
  }
  attachCloseDetection(): void {
    const observer = new MutationObserver(() => {
      // If lightbox container is removed from DOM, close happened
      const lbContainer = document.querySelector('.lightbox');
      if (!lbContainer) {
        // Lightbox closed, restore scroll
        document.body.style.overflow = 'auto';

        // Disconnect observer once done
        observer.disconnect();
      }
    });

    // Start observing body for child list changes (add/remove nodes)
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private backdropClickHandler: any = null;

  attachCloseListener(): void {
    setTimeout(() => {
      const backdrop = document.querySelector('.lightbox-backdrop');
      if (backdrop) {
        this.backdropClickHandler = () => {
          this.closeLightbox();
        };
        backdrop.addEventListener('click', this.backdropClickHandler);
      }
      window.addEventListener('keydown', this.handleKeyDown);
    }, 100);
  }

  closeLightbox(): void {
    this.lightbox.close();
    document.body.style.overflow = 'auto';

    const backdrop = document.querySelector('.lightbox-backdrop');
    if (backdrop && this.backdropClickHandler) {
      backdrop.removeEventListener('click', this.backdropClickHandler);
      this.backdropClickHandler = null;
    }

    window.removeEventListener('keydown', this.handleKeyDown);
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

  // Just in case user navigates or component is destroyed while lightbox is open
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }

  quantity = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity < this.product.items_left) {
      this.quantity++;
    }
  }

  protected readonly colorette = module
}
