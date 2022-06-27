import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Comment } from '../../models/comment';
import { ICommentApiService } from './comment-api.service.interface';

const apiUrl = '/posts';

@Injectable({
  providedIn: 'root',
})
export class CommentApiService implements ICommentApiService {
  constructor(private api: ApiService) {}

  getCommentsOnPost(postId: number): Observable<Comment[]> {
    let url = `${apiUrl}/${postId}/comments`;
    return this.api.get<Comment[]>(url);
  }
}
