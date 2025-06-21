// article-detail.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Subscription } from 'rxjs';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  article: any = null;
  isLoading: boolean = true;
  error: string = '';

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.isLoading = true;
      this.error = '';
      const slug = params['slug'];

      this.articleService.getArticleBySlug(slug).subscribe({
        next: (article) => {
          this.article = article;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'خطا در دریافت مقاله';
          this.isLoading = false;
          console.error('Error fetching article:', err);
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
