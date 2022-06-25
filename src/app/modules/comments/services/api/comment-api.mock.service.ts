import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../z-core/services/api.service';
import { Comment } from '../../models/comment';
import { ICommentApiService } from './comment-api.service.interface';

const apiUrl = '/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentApiService implements ICommentApiService {
  constructor(private api: ApiService) {}

  getCommentsOnPost(postId: number): Observable<Comment[]> {
    let url = `${apiUrl}/?postId=${postId}`;
    return this.api.get<Comment[]>(url);
  }
}
