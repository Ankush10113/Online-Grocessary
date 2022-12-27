import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient,private cookieService:CookieService) { }

  getProduct(){
    let tokenStr='Bearer '+this.cookieService.get("token");
  const headers=new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get<any>("http://localhost:8090/products",{headers})
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
