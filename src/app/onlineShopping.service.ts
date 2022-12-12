import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OnlineShoppingService {

  private baseUrl = 'http://localhost:8090/api/v1/users';

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