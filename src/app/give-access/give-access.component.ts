import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AccessModel } from '../accessModel';
import { OnlineShoppingService } from '../onlineShopping.service';
import { VendorNumberModel } from '../vendorNumberModel';
@Component({
  selector: 'app-give-access',
  templateUrl: './give-access.component.html',
  styleUrls: ['./give-access.component.css']
})
export class GiveAccessComponent implements OnInit {
  listofVendors: any;
  
  vendor:VendorNumberModel=new VendorNumberModel();
  constructor(private onlineShoppingService: OnlineShoppingService,private router:Router,private cookieService:CookieService ) { }
  // changeVendors(e:Event){
  //   console.log((e.target as HTMLInputElement).value);
  //   this.vendor.username=(e.target as HTMLInputElement).value;
  //   this.onlineShoppingService.updateVendors(this.vendor).subscribe((data:any)=>{
  //     console.log(data);
  //   })
  // }
  onPressed(){
    this.save();
  }
  ngOnInit(): void {
    if(this.cookieService.get('role')!='admin')
    {
      this.router.navigate(['/signIn']);
    }
    this.onlineShoppingService.getAllVendors().subscribe((data:any)=>{
      console.log(data);
      this.listofVendors=data;
    })
  }
  save(){
    
    this.onlineShoppingService.updateVendors(this.vendor)
    .subscribe(data => 
{
console.log(data);

}        
      , error=> {
      this.router.navigate(['/errorPage']);
    } );
  this.vendor = new VendorNumberModel();
  }

}
