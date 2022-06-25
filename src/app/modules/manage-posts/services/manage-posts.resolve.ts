import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../../posts/models/post';
import { PostsStateService } from '../../posts/services/state/posts-state.service';

@Injectable()
export class ManagePostsResolve implements Resolve<Post[]> {
  constructor(
    private postsState: PostsStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
    return this.postsState.initPosts();
  }
}
