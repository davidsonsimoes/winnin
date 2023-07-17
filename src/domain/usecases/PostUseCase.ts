import { RedditPost } from '@data/repositories/PostRepository';

export interface GetRedditPostsUseCase {
  (filter: string, page?: number, after?: string): Promise<RedditPost[]>;
}