import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../z-core/services/api.service';
import { Comment } from '../../models/comment';

const apiUrl = 'posts';

@Injectable({
  providedIn: 'root',
})
export class CommentApiService {
  constructor(private api: ApiService) {}

  getCommentsOnPost(postId: number): Observable<Comment[]> {
    let url = `${apiUrl}/${postId}/comments`;
    return this.api.get<Comment[]>(url);
  }
}
