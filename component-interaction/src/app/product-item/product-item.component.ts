import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() name!: string; // declaring an input property for receiving data from parent component
 // declaring an input property for receiving data from parent component

 @Input() price!: number;

 @Output() valueChange =new EventEmitter();
counter=0;
 valueChanged(){
   this.counter=this.counter+1;
   this.valueChange.emit(this.counter);
 }
 constructor() {
  
 }

ngOnInit(): void {
}
}
