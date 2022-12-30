import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AddProductModel } from '../addProductModel';
import { OnlineShoppingService } from '../onlineShopping.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  ngOnInit(): void {
    if(this.cookieService.get('role')!='Vendor_access')
    {
      this.router.navigate(['/']);
    }
  }
  product: AddProductModel = new AddProductModel();
  constructor(private onlineShoppingService: OnlineShoppingService ,
    private router: Router,private cookieService:CookieService) { }
  save() {
 
   


    this.onlineShoppingService.addProduct(this.product)
      .subscribe(data => 
{
  console.log(data);
  
}        
        , error=> {
        this.router.navigate(['/adminDash']);
      } );
    this.product = new AddProductModel();
    
  }
  onPressed() {
   
    this.save();    
  }
}
