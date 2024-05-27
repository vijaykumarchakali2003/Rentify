import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-seller',
  templateUrl: './home-page-seller.component.html',
  styleUrls: ['./home-page-seller.component.scss']
})
export class HomePageSellerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  direct() {
    this.router.navigateByUrl('sellerItems');
  }

}
