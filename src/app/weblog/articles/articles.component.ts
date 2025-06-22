import {Component, Input} from '@angular/core';
import {ArticleComponent} from "../article-list/article.component";
import {ArticleService} from "../article.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    ArticleComponent,
    RouterLink
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent extends ArticleComponent{

}
