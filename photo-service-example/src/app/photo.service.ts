import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { photo } from './Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl: string='https://jsonplaceholder.typicode.com/photos';
  headers= new HttpHeaders().set('content-Type','application/json');
  
  constructor(private http:HttpClient)
  {

  }

   getPhotos():Observable<photo[]>
   {
     return this.http.get<photo[]>(`${this.apiUrl}`);
   }
}
