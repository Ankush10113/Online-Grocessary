import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
  message!:string;
  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get('token')=='')
    {
      this.message="Please enter the correct credentials . If you dont have a account, Click below to get registered .";
    }else if(this.cookieService.get('role')=='Vendor')
    {
    this.message="Please contact admin for access.";
    this.cookieService.deleteAll();
    }else{
      this.message="Please try again later";
    }
  }

}
