import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../z-core/services/api.service';
import { Post } from '../../models/post';

const apiUrl = 'posts';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  constructor(private api: ApiService) {}

  getAll(): Observable<Post[]> {
    return this.api.get<Post[]>(apiUrl);
  }
}
