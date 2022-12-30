import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  text! : string ;
  constructor(private cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
    this.text = this.cookieService.get('name');
  }
  deleteCookie(){
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }

}
