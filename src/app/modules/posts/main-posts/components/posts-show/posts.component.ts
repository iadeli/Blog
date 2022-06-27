import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardOptions } from 'src/app/modules/shared/interfaces/card';
import { firstValueFrom, Observable } from 'rxjs';
import { ButtonOptions } from 'src/app/modules/shared/interfaces/button';
import { Post } from '../../../models/Post';
import { PostStateService } from '../../../services/state/post-state.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postList$: Observable<Post[]> = this.postsState.postList$;
  cards: CardOptions[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsState: PostStateService
  ) {}

  ngOnInit(): void {
    this.mapPostsToCards();
  }

  async mapPostsToCards() {
    let posts = await firstValueFrom(this.postList$);
    this.cards = posts.map(
      (post) =>
        new CardOptions(
          post.id,
          post.title,
          post.body,
          undefined,
          new Array<ButtonOptions>(
            new ButtonOptions(
              'مشاهده',
              this.navigateToPost.bind(this)
            )
          )
        )
    );
  }

  navigateToPost(card: CardOptions) {
    this.router.navigate([`detail/${card.key}`], {
      relativeTo: this.route,
    });
  }
}
