export interface RedditPost {
  id: string;
  title: string;
  author: string;
  date: number;
  domain: string;
  postImage: string;
}

export interface RedditPostData {
  data: RedditPost[],
  after: string;
}