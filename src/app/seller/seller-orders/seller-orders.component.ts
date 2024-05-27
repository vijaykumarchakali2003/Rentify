import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.scss']
})
export class SellerOrdersComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }
userInfo: any;
orders: any;
dataSource: any;
  ngOnInit() {
    const x = localStorage.getItem('userInfo');
    this.userInfo = JSON.parse(x);
    if (!this.userInfo) {
      localStorage.clear();
      this.router.navigateByUrl('');
    }
    const query = { emailId: this.userInfo.emailId};
    this.http.get('https://rentify-api-t4b2.onrender.com/getSellerOrders', { params: query} ).subscribe( (res: any) => {
      this.orders = res.data;
      console.log(this.orders);
      // this.dataSource = new MatTableDataSource<any>(this.orders);
    });
  }

}
