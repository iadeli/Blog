import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StateService } from 'src/app/modules/z-core/services/state.service';
import { Post } from '../../models/post';
import { PostApiService } from '../api/posts-api.mock.service';

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
  constructor(private apiService: PostApiService) {
    super(initialState);
  }

  initPosts(){
    return this.apiService.getAll().pipe(
      tap((posts) => {
        this.setPosts(posts);
      })
    );
  }

  postList$: Observable<Post[]> = this.select((state) => {
    return state.posts;
  });
  
  postSelection$: Observable<Post> = this.select((state) => {
    let post = state.posts.find((item) => item.id === state.selectedPostId);

    if (post == undefined) return new Post();

    return post;
  });

  setPostId(postId: number) {
    this.setState({ selectedPostId: postId });
  }

  setPosts(posts: Post[]) {
    this.setState({ posts: posts });
  }
}
