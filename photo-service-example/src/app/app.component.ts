import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';
import { photo } from './Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos!: photo[];
  constructor(private photoService: PhotoService)
  {

  }
  ngOnInit(): void {
      console.log(this.photoService.getPhotos());
  }
}
