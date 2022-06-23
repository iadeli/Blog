import { InMemoryDbService } from 'angular-in-memory-web-api';
import { faker } from '@faker-js/faker';
import { Post } from '../../posts/models/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const posts: Post[] = [];

    const craetePost = () => {
      return {
        userId: faker.datatype.number(),
        id: faker.datatype.number(),
        title: faker.lorem.slug(),
        body: faker.lorem.paragraphs(),
      };
    };

    Array.from({ length: 10 }).forEach(() => posts.push(craetePost()));

    return { posts };
  }
}
