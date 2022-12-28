import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineShoppingService } from '../onlineShopping.service';
import { User } from '../userModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  submitted = false;
  constructor(private onlineShoppingService: OnlineShoppingService ,
    private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    console.log("emailId "+this.user.emailId+" password "+this.user.password+ " role "+this.user.role);
    this.onlineShoppingService.createUser(this.user)
      .subscribe(data => 
{
  console.log(data);
  this.router.navigate(['/signIn']);
}        
        , error=> {
        this.router.navigate(['/adminDash']);
      } );
    this.user = new User();
    // this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/adminDash']);
  }
}
