import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ItemsPageComponent } from './items-page/items-page.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [UserHomePageComponent, UserHeaderComponent, ProfileComponent, ItemsPageComponent, CartComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserHeaderComponent,
    UserHomePageComponent,
    ItemsPageComponent,
    CartComponent
  ]
})
export class UserModule { }
