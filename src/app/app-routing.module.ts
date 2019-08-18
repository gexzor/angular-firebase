import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
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
