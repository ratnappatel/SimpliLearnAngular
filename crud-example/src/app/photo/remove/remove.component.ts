import { Component, OnInit } from '@angular/core';

import { Photo } from '../Photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  photos:Photo[]=[];
  id:number=0;
  constructor(public service:PhotosService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:Photo[])=>{
      console.log(data);
      this.photos=data;
    });
  }
  deletePhoto(){
    this.service.delete(this.id).subscribe(res=>{
     this.photos= this.photos.filter(p=>p.id!==this.id);
      console.log(this.photos);
    })

  }
}
