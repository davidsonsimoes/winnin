import { fetchRedditPosts } from '../api';

export interface RedditPost {
  id: string;
  title: string;
  author: string;
  date: number;
  domain: number;
  postImage: number;
}

export async function getRedditPosts(filter: string, after?: string): Promise<RedditPost[]> {
  const data = await fetchRedditPosts(filter, after);
  return data.data.children.map((child: any) => ({
    id: child.data.id,
    title: child.data.title,
    author: child.data.author,
    date: child.data.created,
    domain: child.data.domain,
    postImage: child.data.preview?.images[0]?.source?.url
  }));
}