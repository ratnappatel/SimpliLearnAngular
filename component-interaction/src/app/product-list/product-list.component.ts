import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Products[]=[
  {
    "name":"Wireless Keyboard",
    "price": 245.67
  },
  {
    "name":"Home Theatre",
    "price": 69000.500
  },
  {
    "name":"Medical LED Screen",
    "price": 245000.790
  }
];
  constructor() {
      
   }

  ngOnInit(): void {
  
  }
  // Go to child component and read counter object again
  displayCounter(count: any){
    console.log("No of Button Clicked by Child Component is : "+count);
  }

}
