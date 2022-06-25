import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

export interface ICommentApiService {
  getCommentsOnPost(postId: number): Observable<Comment[]>;
}
