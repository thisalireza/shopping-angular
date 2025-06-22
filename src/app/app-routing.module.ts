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
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent, data: {breadcrumb: 'خانه'}},
  {path: 'about-us', component: AboutUsComponent, data: {breadcrumb: 'درباره ما'}},
  {path: 'contact-us', component: ContactUsComponent, data: {breadcrumb: 'تماس با ما'}},
  {path: 'shop', component: ShoppingComponent, data: {breadcrumb: 'Shopping'}},
  {path: 'products/:id', component: InnerProductComponent, data: {breadcrumb: 'Product Details'}},
  {path: 'category/apple', component: AppleComponent , data: {breadcrumb: 'اپل'}},
  {path: 'category/acer', component: AcerComponent , data: {breadcrumb: 'ایسر'}},
  {path: 'category/asus', component: AsusComponent , data: {breadcrumb: 'ایسوس'}},
  {path: 'category/hp', component: HpComponent , data: {breadcrumb: 'اچ پی'}},
  {path: 'category/lenovo', component: LenovoComponent , data: {breadcrumb: 'لنوو'}},
  {path: 'category/msi', component: MsiComponent , data: {breadcrumb: 'ام اس آی'}},
  {path: 'account', component: AccountComponent , data: {breadcrumb: 'حساب کاربری'}},
  {path: 'signIn', component: SigninComponent, data: {breadcrumb: 'ورود | ثبت نام'}},
  {path: 'articles', component: ArticlesComponent, data: {breadcrumb: 'مقالات'}},
  {path: 'articles/:slug', component: ArticleDetailComponent, data: {breadcrumb: 'مقالات'}},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
