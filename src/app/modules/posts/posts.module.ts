import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../y-shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/detail/post-detail.component';
import { PostsApiService } from './services/api/posts-api.service';
import { PostsResolve } from './services/resolver/posts.resolve';
import { PostDetailResolve } from './services/resolver/post-detail.resolve';
import { CommentsModule } from '../comments/comments.module';


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    AllPostsRoutingModule,
    SharedModule,
    CommentsModule
  ]
})
export class PostsModule { }
