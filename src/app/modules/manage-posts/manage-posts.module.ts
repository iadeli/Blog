import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../y-shared/shared.module';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    ManagePostsRoutingModule,
    SharedModule
  ]
})
export class ManagePostsModule { }
