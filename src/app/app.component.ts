import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {DarkModeService} from "./services/dark-mode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isSignInPage = false;


  constructor(private router: Router, private darkModeService: DarkModeService,
              private route: ActivatedRoute,) {
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

  showLayout = true;

  title = 'mdb-angular-ui-kit-free';
}
