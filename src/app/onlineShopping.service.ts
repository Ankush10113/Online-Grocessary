import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticateModel } from './authenticateModel';
import { CookieService } from 'ngx-cookie-service';
import { User } from './userModel';
import { VendorNumberModel } from './vendorNumberModel';


@Injectable({
  providedIn: 'root'
})
export class OnlineShoppingService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient,private cookieService:CookieService) { }

//   getEmployee(id: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/${id}`);
//   }

// For Registration
  createUser(users: Object): Observable<Object> {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }), 
       observe: "response" as 'body'
      };
    return this.http.post(`${this.baseUrl}/users`, users,httpOptions);
  }
  //For Login
  createLogin(login: Object):Observable<AuthenticateModel> {
  
    return this.http.post<AuthenticateModel>(`${this.baseUrl}/authenticate`, login);
  }

  getAllVendors():Observable<Object>{
  
  let tokenStr='Bearer '+this.cookieService.get("token");
  const headers=new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(`${this.baseUrl}/vendors`,{headers,});
  }
  updateVendors(vendor:VendorNumberModel):Observable<Object>{
    let tokenStr='Bearer '+this.cookieService.get("token");
    const headers=new HttpHeaders().set("Authorization",tokenStr);
  
    return this.http.post(`${this.baseUrl}/vendorsPermit`,vendor,{headers})
  }

//   updateEmployee(id: number, value: any): Observable<Object> {
//     return this.http.put(`${this.baseUrl}/${id}`, value);
//   }

//   deleteEmployee(id: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
//   }

//   getEmployeesList(): Observable<any> {
//     return this.http.get(`${this.baseUrl}`);
//   }
}