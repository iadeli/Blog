import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PostEntryComponent } from './post-entry/post-entry.component';
import { PostsComponent } from './post-grid/posts.component';


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
export class ManageMainPageModule { }
