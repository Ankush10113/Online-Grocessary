import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../loginModel';
import { OnlineShoppingService } from '../onlineShopping.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  login: Login = new Login();
  submitted = false;
  constructor(private onlineShoppingService: OnlineShoppingService ,
    private router: Router,private cookieService:CookieService) { }

  ngOnInit(): void {
  }
  save() {
    console.log("username "+this.login.username+" password "+this.login.password);
    this.onlineShoppingService.createLogin(this.login)
      .subscribe((data) =>{
        console.log(data['role']);
        this.cookieService.set('name',data['username']);
        this.cookieService.set('role',data['role']);
        this.cookieService.set('token',data['token']);
        // if(data!=null)
        // {
        //   if(data['role']=='Vendor')
        //   {
        //    this.router.navigate(['/VendorDash']);
        //   }else if(data['role']=='User')
        //   {
        //    this.router.navigate(['/userDash']);
        //   }
         
        // }else{
        //   this.router.navigate(['/errorPage']);
        // }
      
      },
       error=> {
        this.router.navigate(['/errorPage']);
      } );
    this.login = new Login();
    
    // this.gotoList();
  }
  onSub() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/adminDash']);
  }

}
