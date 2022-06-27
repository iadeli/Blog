import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PostsComponent } from './components/posts-show/posts.component';
import { PostDetailComponent } from './components/detail/post-detail.component';
import { CommentsModule } from '../../comments/comments.module';


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule,
    CommentsModule
  ]
})
export class MainPageModule { }
