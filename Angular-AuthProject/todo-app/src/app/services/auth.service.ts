import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Constructors are used to do initialization or adding dependency for the class
  constructor(private http:HttpClient) {
    
   }

   login(username:string,password:string):Observable<boolean>
   {
     return this.http.post<{ token: string; }>('/api/auth', { username: username, password: password }).pipe(map((result: { token: string; }) => {
       localStorage.setItem('access_token', result.token);
       return true;
     }));
     
   }
   logout()
   {
     localStorage.removeItem('access_token');
   }

   public get loggedIn():boolean{
     return (localStorage.getItem('access_token')!==null);
   }
}
