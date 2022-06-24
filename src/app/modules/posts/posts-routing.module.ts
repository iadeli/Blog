import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './components/detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailResolve } from './services/resolver/post-detail.resolve';
import { PostsResolve } from './services/resolver/posts.resolve';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostsComponent,
        resolve: {
          posts: PostsResolve,
        },
      },
      {
        path: 'detail/:id',
        component: PostDetailComponent,
        resolve: {
          post: PostDetailResolve,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[PostsResolve, PostDetailResolve]
})
export class AllPostsRoutingModule {}
