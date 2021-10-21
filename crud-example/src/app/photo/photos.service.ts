import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Photo } from './Photo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private apiURL="https://jsonplaceholder.typicode.com/photos/";
  httpOptions={
    headers:new HttpHeaders(
      {
        'content-Type':'application/json'
      }
    )
  };
  constructor(private http:HttpClient) { }

  getAll():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.apiURL);
  }


  update(id:number, photo:Photo):Observable<Photo>{
    return this.http.put<Photo>(this.apiURL+id,JSON.stringify(photo),this.httpOptions);
  }

  create(photo:Photo):Observable<any>{
    return this.http.post(this.apiURL,JSON.stringify(photo),this.httpOptions);
  }

  delete(id:number){
    return this.http.delete<Photo>(this.apiURL+id+this.httpOptions);
  }

}
