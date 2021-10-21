import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhotosService } from './photo/photos.service';
import { IndexComponent } from './photo/index/index.component';
import { CreateComponent } from './photo/create/create.component';
import { EditComponent } from './photo/edit/edit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RemoveComponent } from './photo/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
