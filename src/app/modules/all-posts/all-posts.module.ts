import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './all-posts-routing.module';
import { SharedModule } from '../y-shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    AllPostsRoutingModule,
    SharedModule
  ]
})
export class AllPostsModule { }
