import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { delay, first, Observable, tap } from "rxjs";  
import { Post } from "../../models/post";
import { PostsApiService } from "../api/posts-api.service";
import { PostsStateService } from "../state/posts-state.service";
  
@Injectable()  
export class PostDetailResolve implements Resolve<Post> {  
  constructor(private apiService: PostsApiService, private postsState: PostsStateService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<Post> { 
    const postId = route.params['id']; 
    this.postsState.setPostId(Number(postId));
    return this.postsState.selectedPost$.pipe(first());
  }  
} 