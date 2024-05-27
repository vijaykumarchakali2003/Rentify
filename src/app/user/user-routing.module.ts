import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'userHomePage',
    component: UserHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
