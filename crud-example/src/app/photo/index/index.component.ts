import { Component, OnInit } from '@angular/core';
import { Photo } from '../Photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  photos:Photo[]=[];
  constructor(public service:PhotosService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (data:Photo[])=>{
        this.photos=data;
        console.log(this.photos);
      }
    );
  }

}
