import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductsListComponent} from "../../_components/product/products-list/products-list.component";

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
    ],
    declarations: [
        ProductsListComponent
    ]
})
export class ProductModule {
}
