import { RedditPost } from '@data/repositories/PostRepository';

export interface GetRedditPostsUseCase {
  (filter: string, after?: string): Promise<RedditPost[]>;
}