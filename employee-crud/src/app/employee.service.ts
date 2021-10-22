import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

 // private apiUrl='http://localhost:90/springboot-crud-rest/employees';
 private apiUrl='http://localhost:3000/employees';
  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  createEmployee(employee: Employee) {
   return this.http.post(`${this.apiUrl}`,employee);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`,{responseType: 'text'});
  }

  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.apiUrl}/${id}`,value);
  }

  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
