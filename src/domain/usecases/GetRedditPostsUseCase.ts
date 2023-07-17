
import { IRedditRepository } from '@domain/repositories/IRedditRepository';
import { RedditPostData } from '@domain/entities/RedditPost';

export interface GetRedditUseCase {
  getRedditPosts(filter: string, after?: string): Promise<RedditPostData>;
}

export class GetRedditPostsUseCase implements GetRedditUseCase {
  constructor(private readonly redditRepository: IRedditRepository) {}

  async getRedditPosts(filter: string, after?: string): Promise<RedditPostData> {
    return this.redditRepository.getRedditPosts(filter, after);
  }
}
