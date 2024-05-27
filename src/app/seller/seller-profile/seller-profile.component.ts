import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponent implements OnInit {

  constructor(private router: Router) { }

  userInfo: any;
  ngOnInit() {
    try {
      const x = localStorage.getItem('userInfo');
      this.userInfo = JSON.parse(x);
      if (!this.userInfo) {
        this.router.navigateByUrl('');
      }
    } catch (err) {
      console.log('Error');
    }
  }

}
