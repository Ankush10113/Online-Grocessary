import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../loginModel';
import { OnlineShoppingService } from '../onlineShopping.service';
import { User } from '../userModel';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  login: Login = new Login();
  submitted = false;
  constructor(private onlineShoppingService: OnlineShoppingService ,
    private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    console.log("username "+this.login.username+" password "+this.login.password);
    this.onlineShoppingService.createLogin(this.login)
      .subscribe((data) =>{
        console.log(data['role']);
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
