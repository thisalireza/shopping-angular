import {Component, Input} from '@angular/core';
import {ArticleComponent} from "../../home-page/article/article.component";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    ArticleComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

}
