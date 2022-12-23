import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './userModel';
import { AuthenticateModel } from './authenticateModel';


@Injectable({
  providedIn: 'root'
})
export class OnlineShoppingService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

//   getEmployee(id: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/${id}`);
//   }

  createUser(users: Object): Observable<Object> {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }), 
       observe: "response" as 'body'
      };
    return this.http.post(`${this.baseUrl}`, users,httpOptions);
  }
  createLogin(login: Object):Observable<AuthenticateModel> {
  
    return this.http.post<AuthenticateModel>(`${this.baseUrl}/authenticate`, login);
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