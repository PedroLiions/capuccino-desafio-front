import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductsListComponent} from "../../_components/product/products-list/products-list.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FloatToBrPipe} from "../../pipies/float-to-br.pipe";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule
    ],
    declarations: [
        ProductsListComponent,
    ]
})
export class ProductModule {
}
