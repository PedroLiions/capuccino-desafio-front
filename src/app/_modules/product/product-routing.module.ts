import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsListComponent} from "../../_components/product/products-list/products-list.component";
import {AppComponent} from "../../app.component";
import {MainComponent} from "../../_components/_main/main.component";

const routes: Routes = [
    {
        path: 'produtos',
        component: MainComponent,
        children: [
            {
                path: '',
                component: ProductsListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}
