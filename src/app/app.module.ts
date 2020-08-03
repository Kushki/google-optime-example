import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  BadgeModule,
  ButtonModule,
  CardModule,
  ContainerModule,
  GridModule, IconModule,
  PageModule, SearchModule, SpacingModule,
  StackModule
} from "@kushki/ng-suka";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BadgeModule,
    ContainerModule,
    GridModule,
    PageModule,
    CardModule,
    StackModule,
    SearchModule,
    IconModule,
    SpacingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
