import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor(private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void {
    if(this.cookieService.get('role')!='Vendor_access')
    {
      this.router.navigate(['/']);
    }

  }

}
