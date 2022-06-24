import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsStateService } from '../../services/state/posts-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardOptions } from 'src/app/modules/y-shared/interfaces/card';
import { firstValueFrom, Observable } from 'rxjs';
import { ButtonOptions } from 'src/app/modules/y-shared/interfaces/button';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.postsState.posts$;
  cards: CardOptions[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsState: PostsStateService
  ) {}

  ngOnInit(): void {
    this.mapPostsToCards();
  }

  async mapPostsToCards() {
    let posts = await firstValueFrom(this.posts$);
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
