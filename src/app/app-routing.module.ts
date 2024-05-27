import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './sessions/home-page/home-page.component';
import { HomePageSellerComponent } from './seller/home-page-seller/home-page-seller.component';
import { ItemsSellerComponent } from './seller/items-seller/items-seller.component';
import { UserHomePageComponent } from './user/user-home-page/user-home-page.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ItemsPageComponent } from './user/items-page/items-page.component';
import { SellerProfileComponent } from './seller/seller-profile/seller-profile.component';
import { CartComponent } from './user/cart/cart.component';
import { SellerOrdersComponent } from './seller/seller-orders/seller-orders.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sellerHomePage',
    component: HomePageSellerComponent
  },
  {
    path: 'sellerItems',
    component: ItemsSellerComponent
  },
  {
    path: 'userHeader',
    component: UserHeaderComponent
  },
  {
    path: 'userHomePage',
    component: UserHomePageComponent
  },
  {
    path: 'userProfile',
    component: ProfileComponent
  },
  {
    path: 'userItems',
    component: ItemsPageComponent
  },
  {
    path: 'sellerProfile',
    component: SellerProfileComponent
  },
  {
    path: 'userCart',
    component: CartComponent
  },
  {
    path: 'sellerOrders',
    component: SellerOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
