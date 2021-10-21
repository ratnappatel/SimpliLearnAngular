import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Photo } from '../Photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 // id!:number;
  photo!:Photo;
  form!:FormGroup;
 
  constructor(public service:PhotosService) { }

  ngOnInit(): void {
    this.form=new FormGroup(
      {
          albumId:new FormControl('',[Validators.required]),
          id:new FormControl('',[Validators.required,Validators.max(20)]),
          title:new FormControl('',[Validators.required]),
          url:new FormControl('',[Validators.required]),
          thumbnailUrl:new FormControl('',[Validators.required])
      }
    );

  }
  get f()
  {
    return this.form.controls;
  }

  submit()
  {
    console.log(this.form.value);
    this.service.update(2,this.form.value).subscribe(res=>{
      console.log('Photo updated successfully.');
    });
  }
  
}
