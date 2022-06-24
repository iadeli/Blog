import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/modules/posts/models/post';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //posts$: Observable<Post[]> = this.postsState.posts$;

  constructor() { }

  ngOnInit(): void {
  }

}
