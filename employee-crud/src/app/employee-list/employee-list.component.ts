import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Observable<Employee[]>;
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    // Calling get all request to see newly added / updated data back on ui
    this.reloadData();
  }

  reloadData()
  {
    this.employees=this.service.getEmployeeList();
  }
}
