import { Observable } from "rxjs/internal/Observable";
import { Post } from "../../models/Post";

export interface IPostApiService {
    getAll(): Observable<Post[]>;

    createPost(post: Post): Observable<Post>;
  
    updatePost(post: Post): Observable<Post>;
  
    deletePost(post: Post): Observable<void>;
}