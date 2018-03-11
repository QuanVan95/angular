import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HocSinhComponent} from './Components/Hocsinh/hocsinh.component';

@NgModule({
  declarations: [
    AppComponent,
    HocSinhComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
