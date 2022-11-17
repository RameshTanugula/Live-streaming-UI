import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkoutreview',
  templateUrl: './checkoutreview.component.html',
  styleUrls: ['./checkoutreview.component.scss']
})
export class CheckoutreviewComponent implements OnInit {

  constructor(private router:Router,   private http: HttpClient) { }

  ngOnInit(): void {
  }
  opendialog(){

  }
checkout(){
  debugger
  var body={
      "itemId": 0,
      "orderId": 0,
      "productId": 2134,
      "quantity": 1,
      "unitPrice": 600,
      "discountType": 0,
      "discountAmount": 0,
      "sellingPrice": 500,
      "isCancel": true,
      "isDelivered": true,
      "deliveryId": 0,
      "eventDate": "2022-11-08T18:27:31.971Z",
      "createdOn": "2022-11-08T18:27:31.971Z",
      "modifiedOn": "2022-11-08T18:27:31.971Z",
      "cancelBy": 0,
      "note": "string"
  }
  this.http.post('http://localhost:44363/api/OrderDetails', body).subscribe(res => {
    debugger
   
  },err=>{
    debugger
  })
}

  goto(){
    this.router.navigate(['/payment'])
  }
}
