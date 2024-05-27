import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  register: false;
  role = 'user';
  userData: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  loginFormDetails(details) {
    localStorage.clear();
    this.userData = [];
    const obj = {
      emailId: details.email,
      password: details.password
    };
    this.http.post('https://rentify-api-t4b2.onrender.com/loginUser', [obj]).subscribe( (res) => {
      this.userData = Object.values(res);
      console.log(this.userData);
      // console.log(res.role);
      if (this.userData[0].role === 'buyer') {
        this.router.navigateByUrl('/userHomePage');
      } else if (this.userData[0].role === 'seller') {
        this.router.navigateByUrl('/sellerHomePage');
      } else {
        alert(this.userData);
      }
      localStorage.setItem('role', 'user');
      localStorage.setItem('userInfo', JSON.stringify(this.userData[0]));
    });
    console.log(details);
    // this.router.navigateByUrl('/userHomePage');
  }

  formDetails(details) {
    console.log(details);
    this.userData = [];
    const data = {
      firstName: details.firstName,
      lastName: details.lastName,
      emailId: details.emailId,
      mobileNumber: details.mobileNumber,
      password: details.password,
      role: details.role
    };
    try {
      this.http.post('https://rentify-api-t4b2.onrender.com/createUser', data).subscribe( (res) => {
        this.userData = Object.values(res);
        console.log(this.userData);
        if (this.userData === 'Successfully Inserted the user') {
          alert(this.userData + 'Please Login !');
        } else {
          alert(this.userData);
        }
      });
    } catch (err) {
    console.log(err);
    }
  }
}
