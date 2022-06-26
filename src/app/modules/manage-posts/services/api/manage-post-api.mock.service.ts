import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../z-core/services/api.service';
import { IPost } from '../../models/IPost';
import { IManagePostApiService } from './manage-post-api.interface';

const apiUrl = '/posts';

@Injectable({
  providedIn: 'root',
})
export class ManagePostApiService implements IManagePostApiService {
  constructor(private api: ApiService) {}

  getAll(): Observable<IPost[]> {
    return this.api.get<IPost[]>(apiUrl);
  }

  createPost(post: IPost): Observable<IPost> {
    return this.api.post<IPost>(apiUrl, post);
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.api.put<IPost>(apiUrl, post);
  }

  deletePost(post: IPost): Observable<void> {
    return this.api.delete<void>(apiUrl, post.id);
  }
}
