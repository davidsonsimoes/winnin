import React, { createContext, useState, useEffect } from 'react';
import { RedditPost } from '@data/repositories/PostRepository';
import {RedditRepository} from '@data/repositories/RedditRepository';

import { GetRedditPostsUseCase } from '@domain/usecases/GetRedditPostsUseCase';

interface RedditContextData {
  posts: RedditPost[];
  loading: boolean;
  error: string | null;
  loadMorePosts: (page: number) => Promise<void>;
  changeFilter: (filter: string) => void;
  activeFilter: string;
}

export const RedditContext = createContext<RedditContextData>({
  posts: [],
  loading: false,
  error: null,
  loadMorePosts: () => Promise.resolve(),
  changeFilter: () => {},
  activeFilter: 'hot',
});

interface RedditContextProviderProps {
  children: React.ReactNode;
}


export const RedditProvider: React.FC<RedditContextProviderProps> = ({
  children
}) => {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error,] = useState<string | null>(null);
  const [after, setAfter] = useState<string | undefined>(undefined);
  const [activeFilter, setCurrentFilter] = useState<string>('hot');
  
  const redditRepo = new RedditRepository();
  const redditUseCase = new GetRedditPostsUseCase(redditRepo);
  
  useEffect(() => {
    setLoading(true);
    redditUseCase.getRedditPosts(activeFilter).then((data) => {
      setPosts(data.data);
      setAfter(data.after);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  const loadMorePosts = (): Promise<void> => {
    setLoading(true);
    return redditUseCase.getRedditPosts(activeFilter, after).then((data) => {
      setPosts((prevPosts) => [...prevPosts, ...data.data]);
      setAfter(data.after);
      setLoading(false);
    });
  };

  const changeFilter = (filter: string) => {
    setPosts([])
    setCurrentFilter(filter);
  };

  return (
    <RedditContext.Provider value={{ posts, loading, error, loadMorePosts, changeFilter, activeFilter }}>
      {children}
    </RedditContext.Provider>
  );
};