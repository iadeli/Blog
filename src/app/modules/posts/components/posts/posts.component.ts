import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsStateService } from '../../services/state/posts-state.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> = this.postsState.posts$;

  constructor(private postsState :PostsStateService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToPost(postId: number){
    this.router.navigate([`detail/${postId}`], {relativeTo:this.activeRoute});
  }

}
