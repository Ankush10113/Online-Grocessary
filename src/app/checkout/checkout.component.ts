import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AddCart } from '../addCartModel';



import { CartService } from '../cart.service';
import { OnlineShoppingService } from '../onlineShopping.service';



@Component({

  selector: 'app-checkout',

  templateUrl: './checkout.component.html',

  styleUrls: ['./checkout.component.css']

})

export class CheckoutComponent implements OnInit {



  public products : any = [];
  list:any=[];
  public grandTotal !: number;
  


  constructor(

             private cartService : CartService,

             private router:Router,private onlineService:OnlineShoppingService) { }

             cart: AddCart = new AddCart();

  ngOnInit() {

    this.cartService.getProducts()

    .subscribe(res=>{

      this.products = res;

      this.grandTotal = this.cartService.getTotalPrice();
     
     

    })
    


  }

  save(){
   if(confirm("Do you want to purchase ??"))
   {
    for(let i=0;i<this.products.length;i++)
    {
      this.list.push(this.products[i].title);
    }
    this.cart.products=this.list;
    
    this.onlineService.addtocart(this.cart)
    .subscribe(data => 
{
  this.emptycarts();
this.router.navigate(['/success']);

}        
      , error=> {
      this.router.navigate(['/adminDash']);
    } );
    

   }
      }

  emptycarts(){

    this.cartService.removeAllCart();

    // this.router.navigate(['/success']);

  }
  onPressed(){
   this.save();
  }
}