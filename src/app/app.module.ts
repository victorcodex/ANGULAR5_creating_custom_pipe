import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PipeforDate} from './datepipe.pipe';


@NgModule({
  declarations: [
    AppComponent, PipeforDate
  ],
  imports: [
    BrowserModule
  ],
  providers: [PipeforDate],
  bootstrap: [AppComponent]
})
export class AppModule { }
