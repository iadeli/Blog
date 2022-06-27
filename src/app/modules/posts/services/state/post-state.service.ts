import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StateService } from 'src/app/modules/core/services/state.service';
import { Post } from '../../models/Post';
import { PostState } from './post-state';
import { PostApiService } from '../api/posts-api.mock.service';


const initialState: PostState = {
  posts: [],
  selectedPostId: 0,
};

@Injectable({
  providedIn: 'root',
})
export class PostStateService extends StateService<PostState> {
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
    if(post == undefined) return new Post();
    return post;
  });

  setPostId(postId: number) {
    this.setState({ selectedPostId: postId });
  }

  setPosts(posts: Post[]) {
    this.setState({ posts: posts });
  }

  create(post: Post) {
    this.apiService.createPost(post).subscribe((newPost) => {
      this.setState({
        posts: [...this.state.posts, newPost],
      });
    });
  }

  update(post: Post) {
    this.apiService.updatePost(post).subscribe(() => {
      this.setState({
        posts: this.state.posts.map((item) =>
          item.id === post.id ? post : item
        ),
      });
    });
  }

  delete(post: Post) {
    this.apiService.deletePost(post).subscribe(() => {
      this.setState({
        posts: this.state.posts.filter((item) => item.id !== post.id),
      });
    });
  }

}
