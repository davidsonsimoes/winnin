const BASE_URL = 'https://www.reddit.com/r';

export async function fetchRedditPostsFromApi(filter: string, after?: string) {
  const response = await fetch(`${BASE_URL}/reactjs/${filter}.json?limit=10&after=${after || ''}`);
  const data = await response.json();
  return data;
}