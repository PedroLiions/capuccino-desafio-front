import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './_components/_header/header.component';
import {FooterComponent} from './_components/_footer/footer.component';
import {MainComponent} from './_components/_main/main.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing";
import {ProductModule} from "./_modules/product/product.module";
import { ProductFormComponent } from './_components/product/product-form/product-form.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MainComponent,
      ProductFormComponent,
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
