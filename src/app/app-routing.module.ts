import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page/homePage/homePage.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {SigninComponent} from "./signin/signin.component";
import {AccountComponent} from "./account/account.component";
import {ArticlesComponent} from "./weblog/articles/articles.component";
import {ShoppingComponent} from "./shop/shopping/shopping.component";
import {InnerProductComponent} from "./shop/inner-product/inner-product.component";
import {AppleComponent} from "./shop/categories/apple/apple.component";
import {MsiComponent} from "./shop/categories/msi/msi.component";
import {LenovoComponent} from "./shop/categories/lenovo/lenovo.component";
import {HpComponent} from "./shop/categories/hp/hp.component";
import {AsusComponent} from "./shop/categories/asus/asus.component";
import {AcerComponent} from "./shop/categories/acer/acer.component";
import {ArticleDetailComponent} from "./weblog/article-detail/article-detail.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'shop', component: ShoppingComponent },
  {path:'products/:id', component:InnerProductComponent},
  {path:'category/apple', component:AppleComponent},
  {path:'category/acer', component:AcerComponent},
  {path:'category/asus', component:AsusComponent},
  {path:'category/hp', component:HpComponent},
  {path:'category/lenovo', component:LenovoComponent},
  {path:'category/msi', component:MsiComponent},
  { path: 'account', component: AccountComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:slug', component: ArticleDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
