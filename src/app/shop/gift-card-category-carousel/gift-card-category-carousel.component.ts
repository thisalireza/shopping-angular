import { Component, OnInit, OnDestroy } from '@angular/core';
import type { SwiperOptions } from 'swiper/types';
import {CurrencyPipe, JsonPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ProductListComponent} from "../product-list/product-list.component";
import {SwiperModule} from "swiper/angular";
import {RouterLink} from "@angular/router";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation
} from 'swiper';
import {ProductService} from "../../services/products.service";
SwiperCore.use([Autoplay, Pagination, Navigation]);
@Component({
  selector: 'app-gift-card-category-carousel',
  standalone: true,
  imports: [
    NgForOf,
    SwiperModule,
    CurrencyPipe,
    RouterLink,
    NgClass,
    NgStyle,
    NgIf
  ],
  templateUrl: './gift-card-category-carousel.component.html',
  styleUrl: './gift-card-category-carousel.component.scss'
})
export class GiftCardCategoryCarouselComponent{

  config: SwiperOptions = {
    freeMode: true,
    navigation: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
  };
  constructor(private productService: ProductService,) {}

  giftCardProducts$ = this.productService.getGiftCardProducts();
}
