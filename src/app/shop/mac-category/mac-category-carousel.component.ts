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
SwiperCore.use([Autoplay, Pagination, Navigation]);
@Component({
  selector: 'app-mac-category',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
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
export class NewProductsCarouselComponent extends ProductListComponent{


  config: SwiperOptions = {
    freeMode: true,
    navigation: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 6,
    spaceBetween: 15,
    loop: true,
  };


}

