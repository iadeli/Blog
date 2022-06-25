import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { first, last, Observable, tap } from 'rxjs';
import { Post } from '../../models/post';
import { PostsApiService } from '../api/posts-api.service';
import { PostsStateService } from '../state/posts-state.service';

@Injectable()
export class PostsResolve implements Resolve<Post[]> {
  constructor(
    private postsState: PostsStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
    return this.postsState.initPosts();
  }
}
