import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { SharedModule } from '../y-shared/shared.module';



@NgModule({
  declarations: [
    CommentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommentListComponent
  ]
})
export class CommentsModule { }
