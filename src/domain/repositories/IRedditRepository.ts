import { RedditPostData } from '../entities/RedditPost';

export interface IRedditRepository {
  getRedditPosts(filter: string, after?: string): Promise<RedditPostData>;
}