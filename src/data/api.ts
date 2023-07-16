const BASE_URL = 'https://www.reddit.com/r/reactjs';

export async function fetchRedditPosts(filter: string, after?: string) {
  const url = `${BASE_URL}/${filter}.json${after ? `?after=${after}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}