import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-items-seller',
  templateUrl: './items-seller.component.html',
  styleUrls: ['./items-seller.component.scss']
})
export class ItemsSellerComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  // perission = 'seller';
  userInfo: any;
  userItems: any;
  updatingItem: any;
  ngOnInit() {
    // if (this.perission === 'seller') {
    //   this.router.navigateByUrl('/sellerHomePage');
    // }
    const data = localStorage.getItem('userInfo');
    if (data) {
      this.userInfo = JSON.parse(data);
      console.log(this.userInfo);
      console.log(this.userInfo.role); // Now role should be accessible
    } else {
      this.router.navigateByUrl('');
    }
    this.getItems();
  }

  getItems() {
    this.userItems = [];
    console.log(this.userItems, '=======');
    const obj = { emailId: this.userInfo.emailId};

    this.http.post('https://rentify-api-t4b2.onrender.com/getUserItems', obj).subscribe( (res: any) => {
      this.userItems = res.userItems ? res.userItems : '';
      console.log(this.userItems);
    });
  }

  addItems(addItemsForm) {
    const details = addItemsForm.value;
    const data = {
      houseType: details.houseType,
      location: details.location,
      bedroomsNumber: details.bedroomsNumber,
      bathroomsNumber: details.bathroomsNumber,
      cost: details.cost,
      nearHospital: details.nearHospital,
      nearSchool: details.nearSchool,
      sellerMail: this.userInfo.emailId,
      parkingAre: details.parkingAre,
      squareFootage: details.squareFootage
    };
    const modal = document.getElementById('addItemsModal');
    try {
      this.http.post('https://rentify-api-t4b2.onrender.com/addNewItem', data).subscribe( (res: any) => {
        const dataa = res;
        console.log(dataa);
        if ( dataa.message === 'Successfully Inserted the Item') {
          alert(dataa.message);
          addItemsForm.reset();
          this.getItems();
        } else {
          // tslint:disable-next-line:whitespace
          dataa.message? alert(dataa.message) : alert(dataa.error);
        }
      });
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  }

  updateItems(updateItemsForm) {
    const details = updateItemsForm.value;
    // tslint:disable-next-line:prefer-const
    console.log(this.updatingItem);
    const data = {
      id: String,
      houseType: String,
      location: String,
      bedroomsNumber: Number,
      bathroomsNumber: Number,
      squareFootage: Number,
      cost: Number,
      parkingAre: String,
      nearHospital: String,
      nearSchool: String
    };
    data.id = this.updatingItem._id;
    if ( !(this.updatingItem.houseType === details.houseType) && (details.houseType !== null)) {
      data.houseType = details.houseType;
    }
    if (!(this.updatingItem.location === details.location) && (details.location !== null)) {
      data.location = details.location;
    }
    if (!(this.updatingItem.bedroomsNumber === details.bedroomsNumber) && (details.bedroomsNumber !== null)) {
      data.bedroomsNumber = details.bedroomsNumber;
    }
    if (!(this.updatingItem.bathroomsNumber === details.bathroomsNumber) && (details.bathroomsNumber !== null)) {
      data.bathroomsNumber = details.bathroomsNumber;
    }
    if (!(this.updatingItem.cost === details.cost) && (details.cost !== null) ) {
      data.cost = details.cost;
    }
    if (!(this.updatingItem.nearHospital === details.nearHospital) && (details.nearHospital !== null)) {
      data.nearHospital = details.nearHospital;
    }
    if (!(this.updatingItem.nearSchool === details.nearSchool) && (details.nearSchool !== null)) {
      data.nearSchool = details.nearSchool;
    }
    if (!(this.updatingItem.parkingAre === details.parkingAre) && (details.parkingAre !== null) ) {
      data.parkingAre = details.parkingAre;
    }
    if (!(this.updatingItem.squareFootage === details.squareFootage) && (details.squareFootage !== null)) {
      data.squareFootage = details.squareFootage;
    }
    this.http.patch('https://rentify-api-t4b2.onrender.com/updateItems', data).subscribe( (res) => {
      this.getItems();
      alert('Updated');
      // location.reload();
    });
    this.getItems();
  }

  update(item) {
    this.updatingItem = item;
  }
  delete(item) {
    const id = { id: item._id};
    console.log(id);
    const options = {
      body: id,
      observe: 'body' as const
    };
    this.http.delete('https://rentify-api-t4b2.onrender.com/deleteItems', options ).subscribe( (res) => {
      console.log('Deleted SuccessFully');
      // location.reload();
      this.getItems();
    });
  }

}
