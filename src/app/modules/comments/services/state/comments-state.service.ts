import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StateService } from 'src/app/modules/z-core/services/state.service';
import { Comment } from '../../../comments/models/comment';
import { CommentApiService } from '../api/comment-api.mock.service';


export interface CommentState {
  comments: Comment[];
  selectedPostId: number;
}

const initialState: CommentState = {
  comments: [],
  selectedPostId: 0,
};


@Injectable({
  providedIn: 'root',
})
export class CommentStateService extends StateService<CommentState> {
  constructor(private apiService: CommentApiService) {
    super(initialState);
  }

  initComments(postId: number) {
    this.apiService.getCommentsOnPost(postId).subscribe((comments: Comment[]) => { 
      console.log(comments)
      this.setComments(comments); 
    });
  }

  commentList$: Observable<Comment[]> = this.select((state) => {
    return state.comments;
  });

  selectedPostId$: Observable<number> = this.select((state) => {
    return state.selectedPostId;
  });

  setPostId(postId: number) {
    this.setState({ selectedPostId: postId });
  }

  setComments(comments: Comment[]) {
    this.setState({ comments: comments });
  }
}
