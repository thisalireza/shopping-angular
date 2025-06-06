import { Component } from '@angular/core';
import {MdbCarouselModule,} from "mdb-angular-ui-kit/carousel";
import {ProductListComponent} from "../../shopping/product-list/product-list.component";
import {QuestionAnswerComponent} from "../question-answer/question-answer.component";
import {ArticleComponent} from "../article/article.component";
import {CategoryComponent} from "../../shopping/category/category.component";




@Component({
    selector: 'app-homePage',
    imports: [
        MdbCarouselModule,
        ProductListComponent,
        QuestionAnswerComponent,
        ArticleComponent,
        CategoryComponent
    ],
    templateUrl: './homePage.component.html',
    styleUrl: './homePage.component.scss'
})
export class HomePageComponent {

}
