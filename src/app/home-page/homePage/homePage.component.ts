import {Component} from '@angular/core';
import {MdbCarouselModule,} from "mdb-angular-ui-kit/carousel";
import {ProductListComponent} from "../../shop/product-list/product-list.component";
import {QuestionAnswerComponent} from "../question-answer/question-answer.component";
import {ArticleComponent} from "../../weblog/article-list/article.component";
import {CategoryComponent} from "../../shop/category/category.component";
import {MacCategoryCarouselComponent,} from "../../shop/mac-category-carousel/mac-category-carousel.component";
import {IphoneCategoryCarouselComponent} from "../../shop/iphone-category-carousel/iphone-category-carousel.component";
import {IpadCategoryCarouselComponent} from "../../shop/ipad-category-carousel/ipad-category-carousel.component";
import {
  AppleWatchCategoryCarouselComponent
} from "../../shop/apple-watch-category-carousel/apple-watch-category-carousel.component";
import {
  AppleIdCategoryCarouselComponent
} from "../../shop/apple-id-category-carousel/apple-id-category-carousel.component";
import {
  AirpodsCategoryCarouselComponent
} from "../../shop/airpods-category-carousel/airpods-category-carousel.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-homePage',
  imports: [
    MdbCarouselModule,
    ProductListComponent,
    QuestionAnswerComponent,
    ArticleComponent,
    CategoryComponent,
    IphoneCategoryCarouselComponent,
    IpadCategoryCarouselComponent,
    AppleWatchCategoryCarouselComponent,
    AppleIdCategoryCarouselComponent,
    AirpodsCategoryCarouselComponent,
    MacCategoryCarouselComponent,
    RouterLink,
  ],
  standalone: true,
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent {

}
