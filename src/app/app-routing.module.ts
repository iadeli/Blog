import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
  { path: 'manage_posts', loadChildren: () => import('./modules/manage-posts/manage-posts.module').then(m => m.ManagePostsModule) },   
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
