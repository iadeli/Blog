import { InMemoryDbService } from 'angular-in-memory-web-api';
import { faker } from '@faker-js/faker';
import { Post } from '../../posts/models/post';
import { Comment } from '../../comments/models/comment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts: Post[] = [];
    const comments: Comment[] = [];

    const craetePost = () => {
      return {
        userId: faker.datatype.number(),
        id: faker.datatype.number(),
        title: faker.lorem.slug(),
        body: faker.lorem.paragraphs(),
      };
    };

    const createComment = (post_id: number) => {
      return {
        postId: post_id,
        id: faker.datatype.number(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        body: faker.lorem.paragraphs()
      }
    }

    Array.from({ length: 10 }).forEach(() => {
      let post = craetePost();
      posts.push(post);
      Array.from({ length: 5 }).forEach(() => {
        let comment = createComment(post.id);
        comments.push(comment);
      });
    });

    return { posts, comments };
  }
}
