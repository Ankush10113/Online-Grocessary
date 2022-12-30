import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(private formBuilder: FormBuilder,
             private cartService : CartService,
             private router:Router) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.products);
      console.log(this.grandTotal);
    })

  }

  emptycarts(){
    this.cartService.removeAllCart();
    this.router.navigate(['/success']);
  }
}