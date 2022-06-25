import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Post } from '../../posts/models/post';
import { PostsStateService } from '../../posts/services/state/posts-state.service';
import { TableButtonAction } from '../../y-shared/interfaces/grid/tableButtonAction';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList$: Observable<Post[]> = this.postsState.postList$;
  posts: Post[] = [];
  private unsubscribe$ = new Subject();
  
  columns = [    
    { columnDef: 'title', header: 'عنوان پست' },
    { columnDef: 'body', header: 'متن پست' }
  ]

  constructor(private postsState: PostsStateService) { }

  ngOnInit(): void {
    this.fillGrid();
  }

  fillGrid() {
    this.postList$.pipe(takeUntil(this.unsubscribe$)).subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  onTableAction(event: TableButtonAction){
    console.log(event);
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

}
