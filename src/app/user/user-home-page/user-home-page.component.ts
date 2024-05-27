import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {

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

  direct() {
    this.router.navigateByUrl('userItems');
  }

}
