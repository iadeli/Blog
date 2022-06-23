import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsStateService } from '../../services/state/posts-state.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> = this.postsState.posts$;

  constructor(private postsState :PostsStateService) { }

  ngOnInit(): void {
    //this.posts$.subscribe(res => console.log(res));
  }

}
