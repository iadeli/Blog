import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, from, of } from 'rxjs';
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
    this.getPost();
  }
  async getPost() {
    this.post = await firstValueFrom(this.Post$);
    console.log(this.post);
  }
}
