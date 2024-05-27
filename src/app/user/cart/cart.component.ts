import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  userInfo: any;
  itemsList: any;
  ngOnInit() {
    const x = localStorage.getItem('userInfo');
    this.userInfo = JSON.parse(x);
    if (!this.userInfo) {
      this.router.navigateByUrl('');
    }
    const obj = { emailId : this.userInfo.emailId};
    this.http.get('https://rentify-api-t4b2.onrender.com/getUserIntrestedItems', {params: obj}).subscribe( (res) => {
      this.itemsList = res;
      this.itemsList = this.itemsList.data;
      console.log(this.itemsList);
    });
  }

}
