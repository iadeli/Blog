import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/modules/posts/models/Post';
import { PostStateService } from 'src/app/modules/posts/services/state/post-state.service';
import { LinkOptions } from 'src/app/modules/shared/interfaces/link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  postList$: Observable<Post[]> = this.postsState.postList$;
  links: LinkOptions[] = [];
  private unsubscribe$ = new Subject();
  
  constructor(private postsState: PostStateService, private route: ActivatedRoute,) { }

  async ngOnInit(): Promise<void> {
    this.mapPostsToLink();
  }

  mapPostsToLink() {
    this.postList$.pipe(takeUntil(this.unsubscribe$)).subscribe((posts:Post[]) => { 
      this.links = posts.map(post => new LinkOptions(post.title, `/posts/detail/${post.id}`))
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

}
