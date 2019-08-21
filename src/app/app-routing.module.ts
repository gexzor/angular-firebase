import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: 'posts/:id',
        component: PostComponent,
    },
    {
        path: 'buttons',
        component: ButtonsComponent,
    },
    {
        path: '',
        component: PostsComponent,
    },
    {
        path: '**',
        component: PostsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
