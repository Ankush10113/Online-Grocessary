import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.css']
})
export class VendorHeaderComponent implements OnInit {

  constructor(private  cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
  }

  deleteCookie(){
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }
}
