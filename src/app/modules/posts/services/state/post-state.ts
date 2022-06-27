import { Post } from "../../models/Post";

export interface PostState {
  posts: Post[];
  selectedPostId: number;
}
