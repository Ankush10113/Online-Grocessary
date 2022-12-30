import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { OnlineShoppingService } from '../onlineShopping.service';
import { Product } from '../product';

@Component({
  selector: 'app-discount-page',
  templateUrl: './discount-page.component.html',
  styleUrls: ['./discount-page.component.css']
})
export class DiscountPageComponent implements OnInit{
products:any;
constructor(private onlineService:OnlineShoppingService,private router:Router,private cookieService:CookieService) { }
ngOnInit(): void {
  if(this.cookieService.get('role')!='admin')
  {
    this.router.navigate(['/signIn']);
  }else{
    this.onlineService.getallproducts()
    .subscribe((res:Product[])=>{
      this.products = res;
      
    })
  }
 
  

}
update(text:any)
  {
    this.router.navigate([`/product/${text}`]);
  }
}
