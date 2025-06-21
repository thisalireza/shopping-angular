import {Directive, ElementRef, HostListener, NgModule, OnInit, Renderer2} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {HomePageComponent} from "./home-page/homePage/homePage.component";


// Initialization for ES Users
import { Collapse,initMDB } from 'mdb-ui-kit';
import {ProductListComponent} from "./shop/product-list/product-list.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BackToTopComponent} from "./shared/back-to-top/back-to-top.component";

initMDB({ Collapse });

// @Directive({
//   selector: 'img',
//   standalone: true
// })
// export class ImageLoadDirective implements OnInit {
//   constructor(private el: ElementRef,private renderer: Renderer2) {
//     const supports = 'loading' in HTMLImageElement.prototype;
//     if (supports) {
//       this.el.nativeElement.setAttribute('loading', 'lazy');
//       console.log("exec");
//       debugger;
//     }
//     else {
//       console.log("fall back");
//       debugger;
//     }
//   }
//
//   @HostListener('load')
//   onLoad(){
//     this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
//
//   }
//
//   ngOnInit() {
//     this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
//     debugger;
//     this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.25s ease-in');
//   }
// }


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MdbAccordionModule,
        MdbCarouselModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbModalModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRippleModule,
        MdbScrollspyModule,
        MdbTabsModule,
        MdbTooltipModule,
        MdbValidationModule,
        MenuComponent,
        FooterComponent,
        HomePageComponent,
        ProductListComponent,
        RouterOutlet,
        BackToTopComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
