import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TableConsts } from '../../../shared/const/table';
import { TableButtonAction } from '../../../shared/interfaces/grid/tableButtonAction';
import { Post } from '../../models/Post';
import { PostStateService } from '../../services/state/post-state.service';
import { PostEntryComponent } from '../post-entry/post-entry.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postList$: Observable<Post[]> = this.postsState.postList$;
  posts: Post[] = [];
  matDialogRef!: MatDialogRef<PostEntryComponent>;
  private unsubscribe$ = new Subject();

  columns = [
    { columnDef: 'title', header: 'عنوان پست' },
    { columnDef: 'body', header: 'متن پست' },
  ];

  constructor(
    private postsState: PostStateService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fillGrid();
  }

  fillGrid() {
    this.postList$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onTableAction(event: TableButtonAction) {
    if (event.name != TableConsts.actionButton.delete) this.openModal(event);
    else this.delete(event.value);
  }
  
  openModal(event: TableButtonAction) {
    this.matDialogRef = this.matDialog.open(PostEntryComponent, {
      data: event,
      disableClose: true,
    });
  }

  delete(post: Post) {
    this.postsState.delete(post);
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
