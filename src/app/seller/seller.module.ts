import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageSellerComponent } from './home-page-seller/home-page-seller.component';
import { ItemsSellerComponent } from './items-seller/items-seller.component';
import { SellerHeaderComponent } from './seller-header/seller-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerOrdersComponent } from './seller-orders/seller-orders.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [HomePageSellerComponent, ItemsSellerComponent, SellerHeaderComponent, SellerProfileComponent, SellerOrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  exports: [
    HomePageSellerComponent,
    ItemsSellerComponent,
    SellerHeaderComponent,
    SellerOrdersComponent
  ]
})
export class SellerModule { }
