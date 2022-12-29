import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // cartItems: CartItem[] = [];
  public products : any = [];
  public grandTotal !: number;
  // totalQuantity: number = 0;
  // checkoutFormGroup!: FormGroup;

  // creditCardYears: number[] = [];
  // creditCardMonths: number[] = [];

  // countries: any;
  // shippingAddressStates: any;
  // billingAddressStates: any;
  // countries: Country[] = [];
  // shippingAddressStates: State[] = [];
  // billingAddressStates: State[] = [];

  constructor(private formBuilder: FormBuilder,
             private cartService : CartService) { }

  ngOnInit() {
    // this.cartDetails();
    // this.checkoutFormGroup = this.formBuilder.group({
    //   customer: this.formBuilder.group({
    //     firstName: [''],
    //     lastName: [''],
    //     email: ['']
    //   }),

    //   shippingAddress: this.formBuilder.group({
    //     street: [''],
    //     city: [''],
    //     state: [''],
    //     country: [''],
    //     zipcode: ['']
    //   }),

    //   billingAddress: this.formBuilder.group({
    //     street: [''],
    //     city: [''],
    //     state: [''],
    //     country: [''],
    //     zipcode: ['']
    //   }),

    //   creditCard: this.formBuilder.group({
    //     cardType: [''],
    //     nameOnCard: [''],
    //     cardNumber: [''],
    //     cvv: [''],
    //     expirationMonth: [''],
    //     expirationYear: ['']
    //   }),

    // });
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.products);
      console.log(this.grandTotal);
    })

  }

  // cartDetails() {
  //   this.cartItems = this._cartService.cartItemList;
  //   this._cartService.grandTotal.subscribe(
  //     data => this.grandTotal = data
  //   );
  //   this._cartService.totalQuantity.subscribe(
  //     data => this.totalQuantity = data
  //   );
  //   this._cartService.calculateTotalPrice();
  // }

  // onsubmit() {
  //   console.log('Purchase the books');
  //   // console.log(this.checkoutFormGroup.get('customer').value);
  //   // console.log("Email is", this.checkoutFormGroup.get('customer').value.email);
  // }
}