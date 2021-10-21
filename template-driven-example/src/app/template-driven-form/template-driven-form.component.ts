import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  countries:any[]=['India',"UAE","US"];
  emp:Employee={
    name:'',
    age:0,
    country:[]
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Employee: "+this.emp);
  }

}
