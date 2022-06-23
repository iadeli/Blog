import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../../models/post';
import { PostsStateService } from '../../services/state/posts-state.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {

  Post$: Observable<Post> = this.postsState.selectedPost$;
  post: Post = new Post();

  constructor(
    private route: ActivatedRoute,
    private postsState: PostsStateService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.postsState.selectPost(Number(postId));
    this.Post$.subscribe(res => this.post = res);
  }
}
