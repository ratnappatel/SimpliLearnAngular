import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee!:Employee;
  id!:number;
  constructor(private route:ActivatedRoute,private router:Router,private service:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.service.getEmployee(this.id)
    .subscribe(data=>{
      console.log(data)
      this.employee=data;
    },error=>console.log(error));
  }
  list(){
    this.router.navigate(['employees']);
  }
}
