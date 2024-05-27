import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.scss']
})
export class SellerHeaderComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  direct(item) {
    console.log(item);
    if ( item === 'profile') {
      this.router.navigateByUrl('/sellerProfile');
    } else if ( item === 'home') {
      this.router.navigateByUrl('/sellerHomePage');
    } else if ( item === 'items') {
      console.log('HI');
      this.router.navigateByUrl('sellerItems');
    } else if ( item === 'logout') {
      localStorage.clear();
      this.router.navigateByUrl('');
    } else if ( item === 'profile') {
      this.router.navigateByUrl('sellerProfile');
    } else if ( item === 'orders') {
      this.router.navigateByUrl('sellerOrders');
    }
  }

}
