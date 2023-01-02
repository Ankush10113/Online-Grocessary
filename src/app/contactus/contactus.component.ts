import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineShoppingService } from '../onlineShopping.service';
import { Review } from '../reviewModel';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  review: Review = new Review();
  constructor(private onlineService:OnlineShoppingService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    if(confirm("Want to submit??"))
    {
      this.onlineService.addReview(this.review)
      .subscribe(data => 
  {
  console.log(data);
  
  }        
        , error=> {
        this.router.navigate(['/errorPage']);
      } );
    }
   
  }
  onPressed(){
    this.save();
  }
}
