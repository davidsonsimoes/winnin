import React, { createContext, useState, useEffect } from 'react';
import { RedditPost } from '@data/repositories/PostRepository';
import { GetRedditPostsUseCase } from '@domain/usecases/PostUseCase';

interface RedditContextData {
  posts: RedditPost[];
  loading: boolean;
  error: string | null;
  loadMorePosts: () => void;
  changeFilter: (filter: string) => void;
}

export const RedditContext = createContext<RedditContextData>({
  posts: [],
  loading: false,
  error: null,
  loadMorePosts: () => {},
  changeFilter: () => {},
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
  const [currentFilter, setCurrentFilter] = useState<string>('hot');

  useEffect(() => {
    setLoading(true);
    getRedditPosts(currentFilter).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [getRedditPosts, currentFilter]);

  const loadMorePosts = () => {
    setLoading(true);
    getRedditPosts(currentFilter, after).then((data) => {
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setAfter(data.length > 0 ? data[data.length - 1].id : undefined);
      setLoading(false);
    });
  };

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <RedditContext.Provider value={{ posts, loading, error, loadMorePosts, changeFilter }}>
      {children}
    </RedditContext.Provider>
  );
};