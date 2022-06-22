import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AllPostsModule } from './modules/all-posts/all-posts.module';
//import { ManagePostsModule } from './modules/manage-posts/manage-posts.module';
//import { PostDetailModule } from './modules/post-detail/post-detail.module';

const routes: Routes = [
  { path: 'all_posts', loadChildren: () => import('./modules/all-posts/all-posts.module').then(m => m.AllPostsModule) },
  { path: 'manage_posts', loadChildren: () => import('./modules/manage-posts/manage-posts.module').then(m => m.ManagePostsModule) },  
  { path: 'post_detail', loadChildren: () => import('./modules/post-detail/post-detail.module').then(m => m.PostDetailModule) },  
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
