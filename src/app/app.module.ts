import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './_components/_header/header.component';
import {FooterComponent} from './_components/_footer/footer.component';
import {MainComponent} from './_components/_main/main.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing";
import {ProductModule} from "./_modules/product/product.module";

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MainComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ProductModule
  ],
    exports: [
        RouterModule,
        AppComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
