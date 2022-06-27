import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../../../models/Post';
import { PostStateService } from '../../../services/state/post-state.service';

@Injectable()
export class PostsResolve implements Resolve<Post[]> {
  constructor(
    private postsState: PostStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
    return this.postsState.initPosts();
  }
}
