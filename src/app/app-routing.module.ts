import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page/homePage/homePage.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {SigninComponent} from "./user-account/signin/signin.component";
import {AccountComponent} from "./user-account/account/account.component";
import {ArticlesComponent} from "./weblog/articles/articles.component";
import {ShoppingComponent} from "./shop/shopping/shopping.component";
import {InnerProductComponent} from "./shop/inner-product/inner-product.component";
import {ArticleDetailComponent} from "./weblog/article-detail/article-detail.component";
import {CartComponent} from "./shop/cart/cart.component";
import {LikedProductsComponent} from "./shared/liked-products/liked-products.component";
import {IphoneCategoryCarouselComponent} from "./shop/iphone-category-carousel/iphone-category-carousel.component";
import {IpadCategoryCarouselComponent} from "./shop/ipad-category-carousel/ipad-category-carousel.component";
import {AirpodsCategoryCarouselComponent} from "./shop/airpods-category-carousel/airpods-category-carousel.component";
import {
  AppleWatchCategoryCarouselComponent
} from "./shop/apple-watch-category-carousel/apple-watch-category-carousel.component";
import {GiftCardCategoryCarouselComponent} from "./shop/gift-card-category-carousel/gift-card-category-carousel.component";
import {MacCategoryCarouselComponent} from "./shop/mac-category-carousel/mac-category-carousel.component";
import {SettingComponent} from "./user-account/setting/setting.component";
import {OrdersComponent} from "./shop/orders/orders.component";
import {ProfileComponent} from "./user-account/profile/profile.component";
import {AddressComponent} from "./user-account/address/address.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' , data: {breadcrumb: 'خانه'}},
  {path: 'home', component: HomePageComponent, data: {breadcrumb: 'خانه'}},
  {path: 'about-us', component: AboutUsComponent, data: {breadcrumb: 'درباره ما'}},
  {path: 'contact-us', component: ContactUsComponent, data: {breadcrumb: 'تماس با ما'}},
  {path: 'cart', component: CartComponent, data: {breadcrumb: 'سبد خرید'}},
  {path: 'category/iphone', component: IphoneCategoryCarouselComponent , data: {breadcrumb: 'آیفون'}},
  {path: 'category/mac', component: MacCategoryCarouselComponent , data: {breadcrumb: 'مک'}},
  {path: 'category/ipad', component: IpadCategoryCarouselComponent , data: {breadcrumb: 'آی پد'}},
  {path: 'category/airpods', component: AirpodsCategoryCarouselComponent , data: {breadcrumb: 'ایرپاد'}},
  {path: 'category/apple-watch', component: AppleWatchCategoryCarouselComponent , data: {breadcrumb: 'اپل واچ'}},
  {path: 'category/gift-card', component: GiftCardCategoryCarouselComponent , data: {breadcrumb: 'گیفت کارت'}},
  {path: 'account', component: AccountComponent , data: {breadcrumb: 'حساب کاربری'},
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent , data: {breadcrumb: 'پروفایل'} },
      { path: 'orders', component: OrdersComponent , data: {breadcrumb: 'سفارش ها'} },
      { path: 'settings', component: SettingComponent , data: {breadcrumb: 'تنظیمات'} },
      { path: 'liked-products', component: LikedProductsComponent , data: {breadcrumb: 'علاقه مندی ها'} },
      { path: 'cart', component: CartComponent , data: {breadcrumb: 'سبد خرید'} },
      { path: 'address', component: AddressComponent , data: {breadcrumb: 'آدرس ها'} },
    ]},
  {path: 'liked-products', component: LikedProductsComponent , data: {breadcrumb: 'علاقه مندی ها'}},
  {path: 'signIn', component: SigninComponent, data: {breadcrumb: 'ورود | ثبت نام'}},
  {path: 'articles', component: ArticlesComponent, data: {breadcrumb: 'مقالات'},},
  {path: 'articles/:slug', component: ArticleDetailComponent, data: {breadcrumb: ''}},
  {path: 'products', component: ShoppingComponent, data: {breadcrumb: 'فروشگاه'}},
  {path: 'products/:slug', component: InnerProductComponent, data: {breadcrumb: ''}},
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
