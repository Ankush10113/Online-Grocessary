import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { OnlineShoppingService } from '../onlineShopping.service';
import { Review } from '../reviewModel';

@Component({
  selector: 'app-see-reviews',
  templateUrl: './see-reviews.component.html',
  styleUrls: ['./see-reviews.component.css']
})
export class SeeReviewsComponent implements OnInit{
  reviews:any;
  constructor(private onlineService:OnlineShoppingService,private router:Router,private cookieService:CookieService) { }
  ngOnInit(): void {
    if(this.cookieService.get('role')!='admin')
    {
      this.router.navigate(['/signIn']);
    }else{
      this.onlineService.getAllreviews()
      .subscribe((res:Review[])=>{
        this.reviews = res;
        
      })
    }
   
    
  
  }
}
