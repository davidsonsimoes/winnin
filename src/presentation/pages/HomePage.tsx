import React, { useContext } from 'react';
import { RedditContext } from '@context/RedditContext';
import { HomePageWrapper } from './style';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Container from '@components/Container';

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
      <Header />
      <Menu onMenuClick={() => console.log('teste')} activeFilter='hot' />
      <Container>
        <div className="App">
            <p>
                home
            </p>
       </div>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
