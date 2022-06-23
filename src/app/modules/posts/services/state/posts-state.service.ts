import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
//import { shareReplay } from 'rxjs/operators';
import { StateService } from 'src/app/modules/z-core/services/state.service';
import { Post } from '../../models/post';
import { PostsApiService } from '../api/posts-api.service';

export interface PostState {
  posts: Post[];
  selectedPostId: number;
}

const initialState: PostState = {
  posts: [],
  selectedPostId: 0,
};

@Injectable({
  providedIn: 'root',
})
export class PostsStateService extends StateService<PostState> {
  posts$: Observable<Post[]> = this.select((state) => {
    return state.posts;
  });

  selectedPost$: Observable<Post> = this.select((state) => {
    let post = state.posts.find((item) => item.id === state.selectedPostId);

    if (post == undefined) return new Post();

    return post;
  });
  // .pipe(
  //   // Multicast to prevent multiple executions due to multiple subscribers
  //   shareReplay({ refCount: true, bufferSize: 1 })
  // );

  constructor(private apiService: PostsApiService) {
    super(initialState);

    this.load();
  }

  load() {
    this.apiService
      .getAll()
      .subscribe((res: Post[]) => this.setState({ posts: res }));
  }

  selectPost(postId: number) {
    this.setState({ selectedPostId: postId });
  }
}
