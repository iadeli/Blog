import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    ManagePostsRoutingModule
  ]
})
export class ManagePostsModule { }
