import { Observable } from "rxjs/internal/Observable";
import { Post } from "../../models/post";

export interface IPostApiService {
    getAll(): Observable<Post[]>
}