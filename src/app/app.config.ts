import {provideRouter, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/homePage/homePage.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ApplicationConfig} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes :Routes =[
  {
    path:'',
    redirectTo: '/HomePageComponent', pathMatch: 'full'
  },
  {
    path:'contact-us',
    component: ContactUsComponent,
  },
  {
    path:'shopping',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component:PageNotFoundComponent,
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
