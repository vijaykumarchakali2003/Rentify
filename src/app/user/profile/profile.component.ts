import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userInfo: any;
  constructor(private router: Router) { }

  ngOnInit() {
    const x = localStorage.getItem('userInfo');
    this.userInfo = JSON.parse(x);
    if (!this.userInfo) {
      this.router.navigateByUrl('');
    }
  }

  formDetails(details) {
    console.log(details);
}
}
