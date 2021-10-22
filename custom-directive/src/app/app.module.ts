import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StyleMe } from './StyleMe';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EncodePipe } from './EncodePipe';

@NgModule({
  declarations: [
    AppComponent,
    StyleMe,
    EncodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
