import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  
  constructor(private cartService : CartService,private cookieService:CookieService,private router: Router) { }

  ngOnInit(): void {
  
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  deleteCookie(){
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
    
  }
}