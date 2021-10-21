import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  
  constructor(public service:PhotosService) { }

  ngOnInit(): void {
    this.form=new FormGroup(
      {
        albumId:new FormControl('',[Validators.required]),
        id:new FormControl('',[Validators.required]),
        title:new FormControl('',[Validators.required]),
        url:new FormControl('',[Validators.required]),
        thumbnailUrl:new FormControl('',[Validators.required])
      }
    );
  }
  get f(){
    return this.form.controls;
  }

  submit()
  {
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe(res=>{
      console.log('Photo Created Successfully.');
    });
  }

}
