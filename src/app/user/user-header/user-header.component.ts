import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('userInfo')) {
      this.router.navigateByUrl('/');
    }
  }

  direct(item) {
    if (item === 'home') {
      this.router.navigateByUrl('/userHomePage');
    } else if (item === 'profile') {
      this.router.navigateByUrl('/userProfile');
    } else if (item === 'items') {
      this.router.navigateByUrl('/userItems');
    } else if (item === 'cart') {
      this.router.navigateByUrl('/userCart');
    } else if (item === 'logout') {
      localStorage.clear();
      this.router.navigateByUrl('/');
    }
  }

}
