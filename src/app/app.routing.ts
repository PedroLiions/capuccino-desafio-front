import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {MainComponent} from "./_components/_main/main.component";

// Import Containers


export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}