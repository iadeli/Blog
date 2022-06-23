import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StateService } from 'src/app/modules/z-core/services/state.service';
import { Post } from '../../models/post';
import { PostsApiService } from '../api/posts-api.service';

export interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

@Injectable({
  providedIn: 'root',
})
export class PostsStateService extends StateService<PostState> {
  posts$: Observable<Post[]> = this.select((state) => {
    return state.posts;
  });

  constructor(private apiService: PostsApiService) {
    super(initialState);

    this.load();
  }

  load() {
    this.apiService.getAll().subscribe((posts) => this.setState({ posts }));
  }
}
