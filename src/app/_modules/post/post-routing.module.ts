import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from "../../_components/post/post-form/post-form.component";
import { PostListComponent } from "../../_components/post/post-list/post-list.component";
import { MainComponent } from "../../_components/_main/main.component";

const routes: Routes = [
    {
        path: 'post',
        component: MainComponent,
        children: [
            {
                path: '',
                component: PostListComponent
            },
            {
                path: 'novo',
                component: PostFormComponent
            },
            {
                path: 'editar/:id',
                component: PostFormComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }