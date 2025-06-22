import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute, Event, RouterLink} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IBreadcrumb } from '../../interfaces/breadcrumb';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<IBreadcrumb[]>;
  params: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.breadcrumbs$ = this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      map(() => {
        const breadcrumbs = this.buildBreadcrumbs();
        if (breadcrumbs.length > 0) {
          this.params = breadcrumbs[breadcrumbs.length - 1].params;
        }
        return breadcrumbs;
      })
    );
  }

  private buildBreadcrumbs(): IBreadcrumb[] {
    const breadcrumbs: IBreadcrumb[] = [];
    let currentRoute = this.route.root;

    while (currentRoute.firstChild) {
      const route = currentRoute.firstChild;

      // Get breadcrumb label from route data
      const label = route.snapshot.data?.breadcrumb || route.snapshot.routeConfig?.path || '';

      // Only add if we have a label
      if (label) {
        breadcrumbs.push({
          label,
          url: '/' + route.snapshot.url.join('/'),
          params: route.snapshot.params
        });
      }

      currentRoute = route;
    }

    return breadcrumbs;
  }
}
