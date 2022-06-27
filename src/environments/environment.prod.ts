import { PostApiService as MockPostApiService } from 'src/app/modules/posts/services/api/posts-api.mock.service';
import { PostApiService } from 'src/app/modules/posts/services/api/posts-api.service';
import { CommentApiService as MockCommentApiService } from 'src/app/modules/comments/services/api/comment-api.mock.service';
import { CommentApiService } from 'src/app/modules/comments/services/api/comment-api.service';
import { ManagePostApiService as MockManagePostApiService } from 'src/app/modules/manage-posts/services/api/manage-post-api.mock.service';
import { ManagePostApiService } from 'src/app/modules/manage-posts/services/api/manage-post-api.service';

export const environment = {
  production: true,
  apiUrl: 'https://jsonplaceholder.typicode.com',
  providers: [
    { provide: MockPostApiService, useClass: PostApiService },
    { provide: MockCommentApiService, useClass: CommentApiService },
    { provide: MockManagePostApiService, useClass: ManagePostApiService },
  ],
};
