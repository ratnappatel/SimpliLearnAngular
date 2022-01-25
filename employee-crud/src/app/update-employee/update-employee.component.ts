import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
  employee!:Employee;
  constructor(private service:EmployeeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];

    this.service.getEmployee(this.id).subscribe(data=>
      {
        console.log(data)
        this.employee=data;
      },
      error=>console.log(error));
    

  }
  updateEmployee(){
    this.service.updateEmployee(this.id,this.employee).subscribe(data=>{
      console.log(data);
      this.employee=new Employee(); // remove the data from employee object so that it can be re-used
      this.gotoList();
      },
      error=>console.log(error));
  }
  gotoList()
  {
    this.router.navigate(['/employees']);
    
  }
  onSubmit()
  {
    this.updateEmployee();
  }
}
