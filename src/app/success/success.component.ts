import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  
  constructor(private cartService : CartService,private cookieService:CookieService,private router: Router) { }

  ngOnInit(): void {
    if(this.cookieService.get('role')!='User')
    {
      this.router.navigate(['/signIn']);
    }
    else {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
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
