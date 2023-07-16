import React, { createContext, useState, useEffect } from 'react';
import { RedditPost } from '@data/repositories/PostRepository';
import { GetRedditPostsUseCase } from '@domain/usecases/PostUseCase';

interface RedditContextData {
  posts: RedditPost[];
  loading: boolean;
  error: string | null;
  loadMorePosts: () => void;
  changeFilter: (filter: string) => void;
  activeFilter: string;
}

export const RedditContext = createContext<RedditContextData>({
  posts: [],
  loading: false,
  error: null,
  loadMorePosts: () => {},
  changeFilter: () => {},
  activeFilter: 'hot',
});

interface RedditContextProviderProps {
  getRedditPosts: GetRedditPostsUseCase;
  children: React.ReactNode;
}


export const RedditProvider: React.FC<RedditContextProviderProps> = ({
  children,
  getRedditPosts,
}) => {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [after, setAfter] = useState<string | undefined>(undefined);
  const [activeFilter, setCurrentFilter] = useState<string>('hot');

  useEffect(() => {
    setLoading(true);
    getRedditPosts(activeFilter).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [getRedditPosts, activeFilter]);

  const loadMorePosts = () => {
    setLoading(true);
    getRedditPosts(activeFilter, after).then((data) => {
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setAfter(data.length > 0 ? data[data.length - 1].id : undefined);
      setLoading(false);
    });
  };

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <RedditContext.Provider value={{ posts, loading, error, loadMorePosts, changeFilter, activeFilter }}>
      {children}
    </RedditContext.Provider>
  );
};