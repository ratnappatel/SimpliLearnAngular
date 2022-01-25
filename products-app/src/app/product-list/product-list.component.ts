import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!:Observable<Product[]>;
  constructor(private service:ProductService) {
    this.getProductList(); 
    console.log(this.products);
  }

  ngOnInit(): void {
    

  }
  public getProductList()
  {
    this.products=this.service.getAllProducts();
  }
  public getActivities()
  {}
}
