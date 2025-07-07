import {Component, OnDestroy, OnInit} from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {SearchComponent} from "../search/search.component";

import {RouterLink} from "@angular/router";
import {DarkModeComponent} from "../dark-mode/dark-mode.component";
import {CountdownTimerComponent} from "../countdown-timer/countdown-timer.component";
import {NgClass, NgIf} from "@angular/common";
import {LikeService} from "../../services/like.service";
import {AuthStatusService} from "../../services/auth-status.service";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/products.service";


@Component({
  selector: 'app-header',
  imports: [
    MdbCollapseModule,
    SearchComponent,
    RouterLink,
    DarkModeComponent,
    CountdownTimerComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class MenuComponent implements OnDestroy , OnInit {
  cartItemCount = 0;
  constructor(public likeService: LikeService, private authStatusService: AuthStatusService ,     private productService: ProductService) {
    this.subscription = this.authStatusService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }


  private subscription!: Subscription;
  private cartSubscription!: Subscription;


  ngOnInit(): void {
    this.cartSubscription = this.productService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }


  activeLink: string = '/home'; // Default active link

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  getTotalLikes(): number {
    return this.likeService.getTotalLikes();
  }


  isLoggedIn = false;



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

  logout(): void {
    this.authStatusService.logout();
  }
}
