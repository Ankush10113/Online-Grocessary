import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  texts! : string ;
  constructor(private cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
    this.texts = this.cookieService.get('name');
  }
  deleteCookie(){
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }


}
