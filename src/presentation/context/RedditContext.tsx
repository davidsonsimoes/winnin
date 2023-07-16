import React, { createContext, useState } from 'react';

interface RedditContextData {
  posts: any;
  loading: boolean;
  error: string | null;
}

export const RedditContext = createContext<RedditContextData>({
  posts: [],
  loading: false,
  error: null,
});

interface IProps {
 children: React.ReactNode;
}

export const RedditProvider: React.FC<IProps> = ({ children }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <RedditContext.Provider value={{ posts, loading, error }}>
      {children}
    </RedditContext.Provider>
  );
};
