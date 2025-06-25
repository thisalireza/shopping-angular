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
import {ArticleDetailComponent} from "./weblog/article-detail/article-detail.component";
import {CartComponent} from "./shop/cart/cart.component";
import {LikedProductsComponent} from "./shop/liked-products/liked-products.component";
import {IphoneCategoryCarouselComponent} from "./shop/iphone-category-carousel/iphone-category-carousel.component";
import {IpadCategoryCarouselComponent} from "./shop/ipad-category-carousel/ipad-category-carousel.component";
import {AirpodsCategoryCarouselComponent} from "./shop/airpods-category-carousel/airpods-category-carousel.component";
import {
  AppleWatchCategoryCarouselComponent
} from "./shop/apple-watch-category-carousel/apple-watch-category-carousel.component";
import {AppleIdCategoryCarouselComponent} from "./shop/apple-id-category-carousel/apple-id-category-carousel.component";
import {MacCategoryCarouselComponent} from "./shop/mac-category-carousel/mac-category-carousel.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' , data: {breadcrumb: 'خانه'}},
  {path: 'home', component: HomePageComponent, data: {breadcrumb: 'خانه'}},
  {path: 'about-us', component: AboutUsComponent, data: {breadcrumb: 'درباره ما'}},
  {path: 'contact-us', component: ContactUsComponent, data: {breadcrumb: 'تماس با ما'}},
  {path: 'shop', component: ShoppingComponent, data: {breadcrumb: 'Shopping'}},
  {path: 'cart', component: CartComponent, data: {breadcrumb: 'سبد خرید'}},
  {path: 'products/:id', component: InnerProductComponent, data: {breadcrumb: ''}},
  {path: 'category/iphone', component: IphoneCategoryCarouselComponent , data: {breadcrumb: 'آیفون'}},
  {path: 'category/mac', component: MacCategoryCarouselComponent , data: {breadcrumb: 'مک'}},
  {path: 'category/ipad', component: IpadCategoryCarouselComponent , data: {breadcrumb: 'آی پد'}},
  {path: 'category/airpods', component: AirpodsCategoryCarouselComponent , data: {breadcrumb: 'ایرپاد'}},
  {path: 'category/apple-watch', component: AppleWatchCategoryCarouselComponent , data: {breadcrumb: 'لپل واچ'}},
  {path: 'category/apple-id', component: AppleIdCategoryCarouselComponent , data: {breadcrumb: 'اپل آی دی'}},
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
