import { Component } from '@angular/core';
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
import {LikeService} from "../../services/like.service";
SwiperCore.use([Autoplay, Pagination, Navigation]);
@Component({
  selector: 'app-mac-category-carousel',
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
  templateUrl: './mac-category-carousel.component.html',
  styleUrl: './mac-category-carousel.component.scss'
})
export class MacCategoryCarouselComponent extends ProductListComponent{


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



  macProducts$ = this.productService.getMacProducts();


}














