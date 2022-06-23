import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../y-shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/detail/post-detail.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    AllPostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
