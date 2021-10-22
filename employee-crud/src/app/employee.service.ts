import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  private apiUrl='http://localhost:90/springboot-crud-rest/employees';
  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  createEmployee(employee: Employee) {
   return this.http.post(`${this.apiUrl}`,employee);
  }
}
