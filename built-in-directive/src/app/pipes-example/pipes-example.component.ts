import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  birthdate:string ='29-Apr-1980';
  price:number=245;
  message:string="Pipes transform the data format";
  constructor() { }

  ngOnInit(): void {
  }

}
