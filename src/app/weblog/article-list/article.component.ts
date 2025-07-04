// article-list.component.ts
import {Component, Input} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TruncatePipe} from "../../pipes/truncate.pipe";
import {ArticleService} from "../../services/article.service";
import {Articles} from "../../interfaces/articles";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    TruncatePipe,
    RouterLink
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() showOnAllArticles: boolean = false;


  articles: Articles[] = [];

  constructor(private router: Router , private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  get containerClasses(): string {
    return `row row-cols-1 ${this.showOnAllArticles ? 'row-cols-md-2' : 'row-cols-md-3'} g-4`;
  }

  onArticleClick(article: any) {
    this.router.navigate(['/articles', article.slug]);
  }
}
