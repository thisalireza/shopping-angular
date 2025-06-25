import { Component } from '@angular/core';
import {MdbCarouselModule,} from "mdb-angular-ui-kit/carousel";
import {ProductListComponent} from "../../shop/product-list/product-list.component";
import {QuestionAnswerComponent} from "../question-answer/question-answer.component";
import {ArticleComponent} from "../../weblog/article-list/article.component";
import {CategoryComponent} from "../../shop/category/category.component";
import {BackToTopComponent} from "../../shared/back-to-top/back-to-top.component";
import {NewProductsCarouselComponent} from "../../shop/mac-category/mac-category-carousel.component";




@Component({
    selector: 'app-homePage',
  imports: [
    MdbCarouselModule,
    ProductListComponent,
    QuestionAnswerComponent,
    ArticleComponent,
    CategoryComponent,
    BackToTopComponent,
    NewProductsCarouselComponent
  ],
  standalone: true,
    templateUrl: './homePage.component.html',
    styleUrl: './homePage.component.scss',
})
export class HomePageComponent {

}
