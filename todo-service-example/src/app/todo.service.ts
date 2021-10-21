import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// This service need to retrieve data from jsonplaceholder server 
// to execute server request we need HttpClient Module=AJAX calls
// how many type of http requests are available :
export class TodoService {

  constructor(private http:HttpClient) { }

  public getTodos()
  {
      return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }
}
