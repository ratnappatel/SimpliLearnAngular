import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: string[]=[
    "MG Hector","Ford Fiesta", "KIA","Creta","Jaguar"
  ];

  // ngstyle directive dynamic styling
  color:string="green";
  size:number=18;

  // for ngIf conditinal rendering 
  show:boolean=true;
}
