import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    MoreHttpRequestsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // <-- right here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
