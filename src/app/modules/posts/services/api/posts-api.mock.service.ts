import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../z-core/services/api.service';
import { Post } from '../../models/post';
import { IPostApiService } from './posts-api.service.interface';

const apiUrl = '/posts';

@Injectable({
  providedIn: 'root',
})
export class PostApiService implements IPostApiService {
  constructor(private api: ApiService) {}

  getAll(): Observable<Post[]> {
    return this.api.get<Post[]>(apiUrl);
  }
}
