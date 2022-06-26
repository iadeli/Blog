import { Observable } from 'rxjs/internal/Observable';
import { IPost } from '../../models/IPost';

export interface IManagePostApiService {
  getAll(): Observable<IPost[]>;

  createPost(post: IPost): Observable<IPost>;

  updatePost(post: IPost): Observable<IPost>;

  deletePost(post: IPost): Observable<void>;
}
