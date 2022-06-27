import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { SharedModule } from '../y-shared/shared.module';
import { PostEntryComponent } from './post-entry/post-entry.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostEntryComponent
  ],
  imports: [
    CommonModule,
    ManagePostsRoutingModule,
    SharedModule
  ]
})
export class ManagePostsModule { }
