import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { CardOptions } from 'src/app/modules/y-shared/interfaces/card';
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
  card: CardOptions = new CardOptions(0, '', '', undefined, undefined);

  constructor(
    private route: ActivatedRoute,
    private postsState: PostsStateService
  ) {}

  ngOnInit(): void {
    this.mapPostToCard();
  }

  async mapPostToCard() {
    this.post = await firstValueFrom(this.Post$);
    this.card = new CardOptions(this.post.id, this.post.title, this.post.body, undefined, undefined);
  }

}
