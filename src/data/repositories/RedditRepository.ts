import { IRedditRepository } from '@domain/repositories/IRedditRepository';
import { RedditPostData } from '@domain/entities/RedditPost';
import { fetchRedditPostsFromApi } from '@data/api/redditApi';

export class RedditRepository implements IRedditRepository {

  async getRedditPosts(filter: string, after?: string): Promise<RedditPostData> {
    try {
      const data = await fetchRedditPostsFromApi(filter, after);
      // Mapear os dados da API para a entidade RedditPost
      // Supondo que os posts estejam dentro de data.data.children
      const posts = data.data.children.map((post: any) => ({
        id: post.data.id,
        title: post.data.title,
        author: post.data.author,
        date: post.data.created,
        domain: post.data.domain,
        postImage: post.data.preview?.images[0]?.source?.url
      }));

      const respData = {
        data: posts,
        after: data.data.after
      }
      return respData;
    } catch (error) {
      throw new Error('Failed to get Reddit posts.');
    }
  }
};





// export interface GameRepository {
//   fetchCSGOGames(page: number): Promise<Game[]>;
//   fetchTeamCSGOGames(teamId: number): Promise<Team | null>; 
// }

// export class PandascoreGameRepository implements GameRepository {
//   private baseURL = 'https://api.pandascore.co';
//   private token = process.env.PANDA_API_KEY || 'uAkm7oaA02uLWePZqp-lZ_DwKy53o6X34SHFJi6jNvxfddbjyl0';

//   async fetchCSGOGames(page: number): Promise<Game[]> {
//     try {
//       const response = await axios.get(`${this.baseURL}/csgo/matches/upcoming?page=${page}&per_page=10`, {
//         params: {
//           token: this.token,
//         },
//       });

//       return response.data;
//     } catch (error) {
//       throw new Error('Falha ao buscar os jogos de CS:GO.');
//     }
//   }

//   async fetchTeamCSGOGames(teamId: number): Promise<Team | null> {
//     try {
//       const response = await axios.get(`${this.baseURL}/teams/${teamId}`, {
//         params: {
//           token: this.token,
//         },
//       });

//       return response.data;
//     } catch (error) {
//       throw new Error('Falha ao buscar os times de CS:GO.');
//     }
//   }
// }
