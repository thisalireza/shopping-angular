import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page/homePage/homePage.component";
import {AboutUsComponent} from "./about-us/about-us.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'shopping', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
