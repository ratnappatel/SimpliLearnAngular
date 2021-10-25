import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api="http://localhost:3000/users/";

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string):Observable<any>{
    return this.http.post(api,{username,password},httpOptions);
  }
  register(username:string, email:string,password:string):Observable<any>{
    return this.http.post(api,{
      username,
      email,
      password
    },httpOptions);
  }
}
