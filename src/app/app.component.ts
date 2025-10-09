import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AfterViewInit, Component, NgZone, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {DarkModeService} from "./services/dark-mode.service";
import Lenis from '@studio-freight/lenis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isSignInPage = false;
  private lenis!: Lenis;
  showLayout = true;
  title = 'mdb-angular-ui-kit-free';

  constructor(private router: Router, private darkModeService: DarkModeService,
              private route: ActivatedRoute, private ngZone: NgZone) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isSignInPage = event.urlAfterRedirects.includes('/signIn');
    });
  }

  onRouteActivate(event: any) {
  }


  ngOnInit() {
    this.darkModeService.init();
  }


  ngAfterViewInit(): void {
    //scroll with lenis
    this.ngZone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        lerp: 0.1,               // پیش‌فرض متداول Lenis — نرم ولی واکنش‌پذیر
        smoothWheel: true,       // فعال‌سازی smoothing برای wheel
        wheelMultiplier: 1.0,    // حساسیت چرخِ موس — مقدار دمو نزدیک 1 است
        touchMultiplier: 1.2,    // برای لمس موبایل — کمی تیزتر
      });

      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }


}
