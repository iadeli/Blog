import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { first, Observable } from 'rxjs';
import { CommentStateService } from 'src/app/modules/comments/services/state/comments-state.service';
import { Post } from '../../../models/Post';
import { PostStateService } from '../../../services/state/post-state.service';

@Injectable()
export class PostDetailResolve implements Resolve<Post> {
  constructor(
    private postsState: PostStateService,
    private commentState: CommentStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    const postId = Number(route.params['id']);
    this.postsState.setPostId(postId);

    //TODO: init in post component
    this.commentState.setPostId(postId);
    this.commentState.initComments(postId);

    return this.postsState.postSelection$.pipe(first()); 
  }
}
