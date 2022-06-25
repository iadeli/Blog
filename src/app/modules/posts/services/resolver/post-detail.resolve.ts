import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { delay, first, Observable, pipe, tap } from 'rxjs';
import { CommentStateService } from 'src/app/modules/comments/services/state/comments-state.service';
import { WaitService } from 'src/app/modules/z-core/services/wait.service';
import { Post } from '../../models/post';
import { PostsStateService } from '../state/posts-state.service';

@Injectable()
export class PostDetailResolve implements Resolve<Post> {
  constructor(
    private postsState: PostsStateService,
    private commentState: CommentStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    const postId = Number(route.params['id']);
    this.postsState.setPostId(postId);

    //TODO: init in resolve or post component ??
    this.commentState.setPostId(postId);
    this.commentState.initComments(postId);

    return this.postsState.postSelection$.pipe(first()); 
  }
}
