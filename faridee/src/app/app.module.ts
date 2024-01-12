import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestComponent} from "./test/test.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
