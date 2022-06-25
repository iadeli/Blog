import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CommentStateService } from 'src/app/modules/comments/services/state/comments-state.service';
import { CardOptions } from 'src/app/modules/y-shared/interfaces/card';
import { Post } from '../../models/post';
import { Comment } from '../../../comments/models/comment';
import { PostsStateService } from '../../services/state/posts-state.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  postSelection$: Observable<Post> = this.postsState.postSelection$;
  postSelection: Post = new Post();
  card: CardOptions = new CardOptions(0, '', '', undefined, undefined);
  commentList$: Observable<Comment[]> = this.commentState.commentList$;
  commentList: Comment[] = [];
  private unsubscribe$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsState: PostsStateService,
    private commentState: CommentStateService
  ) {}

  ngOnInit(): void {
    this.getPostSelection();
    this.getCommentList();
    this.mapPostToCard();
  }

  private getCommentList() {
    this.commentList$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((comments: Comment[]) => {
        this.commentList = comments;
      });
  }

  private getPostSelection() {
    this.postSelection$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((post: Post) => {
        this.commentList = [];
        this.postSelection = post;
      });
  }

  async mapPostToCard() {
    this.route.params.subscribe(async (param) => {
      if (this.postSelection.id == 0) {
        this.router.navigate([`posts`]);
        return;
      }

      this.card = new CardOptions(
        this.postSelection.id,
        this.postSelection.title,
        this.postSelection.body,
        undefined,
        undefined
      );
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
