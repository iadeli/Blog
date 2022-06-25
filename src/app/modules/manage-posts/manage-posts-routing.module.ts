import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ManagePostsResolve } from './services/manage-posts.resolve';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: ManagePostsResolve,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ManagePostsResolve]
})
export class ManagePostsRoutingModule {}
