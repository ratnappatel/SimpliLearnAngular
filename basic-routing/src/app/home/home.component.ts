import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msgs:string[]=["Home","SimpliLearn Main Page","Entry Page"];
  constructor() { }

  ngOnInit(): void {
  }

}
