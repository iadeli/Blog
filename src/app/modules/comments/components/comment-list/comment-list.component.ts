import { Component, OnInit } from '@angular/core';
import { CommentStateService } from '../../services/state/comments-state.service';
import { Comment } from '../../models/comment';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  commentList$: Observable<Comment[]> = this.commentState.commentList$;
  commentList: Comment[] = [];
  private unsubscribe$ = new Subject();
  
  constructor(private commentState: CommentStateService) { }

  ngOnInit(): void {
    this.getCommentList();
  }


  private getCommentList() {
    this.commentList$.pipe(takeUntil(this.unsubscribe$)).subscribe((comments:Comment[]) => {
      this.commentList = comments;
    })
  }

  ngOnDestroy(){
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

}
