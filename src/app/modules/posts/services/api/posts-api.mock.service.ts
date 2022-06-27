import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../models/Post';
import { IPostApiService } from './posts-api.service.interface';

const apiUrl = '/posts';

@Injectable({
  providedIn: 'root',
})
export class PostApiService implements IPostApiService {
  constructor(private api: ApiService) {}

  getAll(): Observable<Post[]> {
    return this.api.get<Post[]>(apiUrl);
  }

  createPost(post: Post): Observable<Post> {
    return this.api.post<Post>(apiUrl, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.api.put<Post>(apiUrl, post);
  }

  deletePost(post: Post): Observable<void> {
    return this.api.delete<void>(apiUrl, post.id);
  }
}
