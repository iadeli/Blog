import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StateService } from 'src/app/modules/z-core/services/state.service';
import { IPost } from '../../models/IPost';
import { ManagePostApiService } from '../api/manage-post-api.mock.service';

export interface PostState {
  posts: IPost[];
}

const initialState: PostState = {
  posts: [],
};

@Injectable({
  providedIn: 'root',
})
export class ManagePostStateService extends StateService<PostState> {
  constructor(private apiService: ManagePostApiService) {
    super(initialState);
  }

  initPosts() {
    return this.apiService.getAll().pipe(
      tap((posts) => {
        this.setPosts(posts);
      })
    );
  }

  postList$: Observable<IPost[]> = this.select((state) => {
    return state.posts;
  });

  setPosts(posts: IPost[]) {
    this.setState({ posts: posts });
  }

  create(post: IPost) {
    this.apiService.createPost(post).subscribe((newPost) => {
      this.setState({
        posts: [...this.state.posts, newPost],
      });
    });
  }

  update(post: IPost) {
    this.apiService.updatePost(post).subscribe(() => {
      this.setState({
        posts: this.state.posts.map((item) =>
          item.id === post.id ? post : item
        ),
      });
    });
  }

  delete(post: IPost) {
    this.apiService.deletePost(post).subscribe(() => {
      this.setState({
        posts: this.state.posts.filter((item) => item.id !== post.id),
      });
    });
  }
}
