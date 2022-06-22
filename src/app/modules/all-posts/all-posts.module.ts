import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './all-posts-routing.module';
import { PostsComponent } from './posts/posts.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    AllPostsRoutingModule,

    MatCardModule
  ]
})
export class AllPostsModule { }
