import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable, tap } from "rxjs";  
import { Post } from "../../models/post";
import { PostsApiService } from "../api/posts-api.service";
import { PostsStateService } from "../state/posts-state.service";
  
@Injectable()  
export class PostsResolve implements Resolve<Post[]> {  
  constructor(private apiService: PostsApiService, private postsState: PostsStateService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {  
    return this.apiService.getAll().pipe(
      tap(posts => {
        this.postsState.setPosts(posts);
      })
    );
  }  
} 