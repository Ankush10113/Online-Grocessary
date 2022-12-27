import { Component, OnInit } from '@angular/core';
import { OnlineShoppingService } from '../onlineShopping.service';
import { User } from '../userModel';
import { VendorNumberModel } from '../vendorNumberModel';
@Component({
  selector: 'app-give-access',
  templateUrl: './give-access.component.html',
  styleUrls: ['./give-access.component.css']
})
export class GiveAccessComponent implements OnInit {
  listofVendors: any;
  vendor:VendorNumberModel=new VendorNumberModel();
  constructor(private onlineShoppingService: OnlineShoppingService ) { }
  changeVendors(e:Event){
    console.log((e.target as HTMLInputElement).value);
    this.vendor.username=(e.target as HTMLInputElement).value;
    this.onlineShoppingService.updateVendors(this.vendor).subscribe((data:any)=>{
      console.log(data);
    })
  }
  ngOnInit(): void {
    this.onlineShoppingService.getAllVendors().subscribe((data:any)=>{
      console.log(data);
      this.listofVendors=data;
    })
  }

}
