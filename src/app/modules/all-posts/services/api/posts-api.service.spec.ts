import { TestBed } from '@angular/core/testing';

import { PostsApiService } from './posts-api.service';

describe('PostsService', () => {
  let service: PostsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
