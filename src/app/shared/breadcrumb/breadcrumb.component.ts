// breadcrumb.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, Event, NavigationEnd, ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, distinctUntilChanged, tap } from 'rxjs/operators';
import {IBreadcrumb} from "../../interfaces/breadcrumb";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  breadcrumbs: IBreadcrumb[] = [];
  showBreadcrumb: boolean = true;

  constructor(
      public router: Router,
      private activatedRoute: ActivatedRoute
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showBreadcrumb = this.router.url !== '/home';

      }
    });
  }

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        distinctUntilChanged(),
        tap(() => {
          this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
        })
    ).subscribe();
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    if (route.snapshot.url.length === 0) {
      breadcrumbs.push({
        label: 'خانه',
        url: '/'
      });
    }

    const children = route.children;

    if (route.snapshot.data?.breadcrumb) {
      const path = route.snapshot.url.map(segment => segment.path).join('/');
      const breadcrumb: IBreadcrumb = {
        label: route.snapshot.data.breadcrumb,
        url: path ? `${url}/${path}` : url
      };
      breadcrumbs.push(breadcrumb);
    }

    if (children) {
      children.forEach(child => {
        this.buildBreadcrumbs(child, url, breadcrumbs);
      });
    }

    return breadcrumbs;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
