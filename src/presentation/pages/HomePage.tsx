import React, { useContext } from 'react';
import { RedditContext } from '../context/RedditContext';
import { HomePageWrapper } from './style';

const HomePage: React.FC = () => {
  const { posts, loading, error } = useContext(RedditContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <HomePageWrapper>
      <div>Header</div>
      <div>Menu</div>
      <div className="App">
        <p>
            home
        </p>
       </div>
    </HomePageWrapper>
  );
};

export default HomePage;
