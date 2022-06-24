import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsStateService } from '../../services/state/posts-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardOptions } from 'src/app/modules/y-shared/interfaces/card';
import { firstValueFrom, Observable  } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.postsState.posts$;
  posts: Post[] = [];
  card: CardOptions = new CardOptions();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsState: PostsStateService
  ) {}

  ngOnInit(): void {
    this.createCards();
  }

  async createCards(): Promise<any> {
    //let posts = this.route.snapshot.data['posts'];
    let posts = await firstValueFrom(this.posts$);
    console.log(posts);
  }

  navigateToPost(postId: number) {
    this.router.navigate([`detail/${postId}`], {
      relativeTo: this.route,
    });
  }
}
