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
import {CartComponent} from "./shop/cart/cart.component";
import {LikedProductsComponent} from "./shop/liked-products/liked-products.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' , data: {breadcrumb: 'خانه'}},
  {path: 'home', component: HomePageComponent, data: {breadcrumb: 'خانه'}},
  {path: 'about-us', component: AboutUsComponent, data: {breadcrumb: 'درباره ما'}},
  {path: 'contact-us', component: ContactUsComponent, data: {breadcrumb: 'تماس با ما'}},
  {path: 'shop', component: ShoppingComponent, data: {breadcrumb: 'Shopping'}},
  {path: 'cart', component: CartComponent, data: {breadcrumb: 'سبد خرید'}},
  {path: 'products/:id', component: InnerProductComponent, data: {breadcrumb: 'Product Details'}},
  {path: 'category/mac', component: AppleComponent , data: {breadcrumb: 'مک'}},
  {path: 'category/iphone', component: AcerComponent , data: {breadcrumb: 'آیفون'}},
  {path: 'category/ipad', component: AsusComponent , data: {breadcrumb: 'آی پد'}},
  {path: 'category/airpods', component: HpComponent , data: {breadcrumb: 'ایرپاد'}},
  {path: 'category/apple-watch', component: LenovoComponent , data: {breadcrumb: 'لپل واچ'}},
  {path: 'category/apple-id', component: MsiComponent , data: {breadcrumb: 'اپل آی دی'}},
  {path: 'account', component: AccountComponent , data: {breadcrumb: 'حساب کاربری'}},
  {path: 'liked-products', component: LikedProductsComponent , data: {breadcrumb: 'علاقه مندی ها'}},
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
